require('dotenv').config()
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const HASURA_SIGNUP_OPERATION = `
mutation MyMutation($name: String!, $phone: String!, $speciality: String!, $d_id: uuid!, $address: String!) {
  insert_doctors(objects: {name: $name, phone: $phone, speciality: $speciality, d_id: $d_id, address: $address}) {
    returning {
      d_id
      name
      phone
    }
  }
}
`;
const USER_MUTATION = `
mutation MyMutation($id: uuid!, $name: String!, $password: String!, $roles: String!, $username: String!, $phone: String!) {
  insert_users(objects: {id: $id, name: $name, password: $password, roles: $roles, username: $username, phone: $phone}) {
    returning {
      id
    }
  }
}
`
const execute = async (variables) => {
  const fetchResponse = await fetch(
    "http://localhost:8080/v1/graphql",
    {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': 'myadminsecretkey'
      },
      body: JSON.stringify({
        query: HASURA_SIGNUP_OPERATION,
        variables
      })
    }
  );
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};
const userexecute = async (variables) => {
  const fetchResponse = await fetch(
    "http://localhost:8080/v1/graphql",
    {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': 'myadminsecretkey'
      },
      body: JSON.stringify({
        query: USER_MUTATION,
        variables
      })
    }
  );
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};
const handler = async (req, res) => {
  const { name, phone, address, speciality } = req.body.input.objects;
  const variables = {
    name: name,
    phone: phone,
    speciality: speciality,
    address: address,
    d_id: uuidv4()
  }
  const { data, errors } = await execute(variables);
  const user = data["insert_doctors"]["returning"][0]
  if (user) {
    const username = 'DBU' + user.phone
    const password = user.name + user.phone
    const id = user.d_id
    const roles = 'doctors'
    const finduser = require('../checker/findusername')
    const { data, error } = await finduser({ username })
    if (data["users"].length != 0) {
      return res.status(400).json({
        message: 'The doctor is already registered no registratrion again'
      })
    }
    else {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashed = bcrypt.hashSync(password, salt);
      const variables = {
        username: username,
        password: hashed,
        id: id,
        roles: roles,
        name:user.name,
        phone:user.phone
      }
      const { data, error } = await userexecute(variables)
      console.log("debug", data);
      if(data["insert_users"]["returning"].length != 0){
        res.status(200).json({
            success:"doctor's Succefully added"
        })
      }
      else{
        return res.status(400).json({
            message:"creating user have a problem"
        })
      }
    }
  }
  else {
    res.send({
      message: "something went wrong please try again"
    })
  }
};
module.exports = handler;