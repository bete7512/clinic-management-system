const FIND_USER = `
query finduser($username: String!){
    users(where: {username: {_eq: $username}}) {
      username
      password
      roles
      id
    }
  }
`;
require('dotenv').config()
const finduser = async (variables) => {
  const fetchResponse = await fetch(
    "https://bursting-bluebird-12.hasura.app/v1/graphql",
    {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': 'k6EMrk1TM5aPv472ddGMOe7XcIukW8n8ftDgTFKQzF5qbe7VG9O54RQhnabKEy4h'
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