const FIND_USER = `
query finduser($username: String!,$email:String!){
    users(limit: 1, where:{_or:[{username: {_eq: $username}},{email: {_eq: $email}}]}) {
      id
      email
      username
      fname
      lname
      password
      full_name
      profile_image
      public_name
    }
  }
`;
require('dotenv').config()
const finduser = async (variables) => {
    const fetchResponse = await fetch(
        "http://localhost:8080/v1/graphql",
        {
            method: 'POST',
            headers:{
                'x-hasura-admin-secret': 'myadminsecretkey'
              },
            body: JSON.stringify({
                query: FIND_USER,
                variables
            })
        });
    console.log('here is well')
    const data = await fetchResponse.json();
    return data;
};
module.exports = finduser;