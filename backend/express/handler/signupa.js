require('dotenv').config()
const fetch = require('node-fetch')

const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const HASURA_SIGNUP_OPERATION = `
mutation MyMutation($name: String!, $address: String!, $phone: String!, $a_id: uuid!) {
    insert_admins(objects: {a_id: $a_id, address: $address, name: $name, phone: $phone}) {
      returning {
        phone
        a_id
        name
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
    "https://bursting-bluebird-12.hasura.app/v1/graphql",
    {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': 'k6EMrk1TM5aPv472ddGMOe7XcIukW8n8ftDgTFKQzF5qbe7VG9O54RQhnabKEy4h'
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
    "https://bursting-bluebird-12.hasura.app/v1/graphql",
    {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': 'k6EMrk1TM5aPv472ddGMOe7XcIukW8n8ftDgTFKQzF5qbe7VG9O54RQhnabKEy4h'
      },
      body: JSON.stringify({
        query: USER_MUTATION,
        variables
      })
    }
  );
  const data = await fetchResponse.json();
  console.log(data);
  return data;
};
const handler = async (req, res) => {
  const { name, phone, address} = req.body.input.objects;
  const variables = {
    name: name,
    phone: phone,
    address: address,
    a_id: uuidv4()
  }
  const { data, errors } = await execute(variables);
  const user = data["insert_admins"]["returning"][0]
  if (user) {
    console.log("from here");
    const username = 'DBU'+user.phone
    const password = user.name+user.phone
    const name = user.name
    console.log(password);
    const id = user.a_id
    const roles = 'admins'
    const finduser = require('../checker/findusername')
    const { data,error } = await finduser({ username })
  if (data["users"].length != 0) {
        console.log(data["users"].length);
        return res.status(400).json({
          message: 'The admin is already registered no registratrion again'
        })
      }
      else {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashed = bcrypt.hashSync(password, salt);
      const variables = {
        username:username,
        password:hashed,
        id:id,
        roles:roles,
        name:user.name,
        phone:user.phone
      }
      const {data,error} = await userexecute(variables)
      console.log(variables);
      console.log("debug",data["insert_users"]);
      if(data["insert_users"]["returning"].length != 0){
        return res.json({
            success:"admin Succefully added"
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