import gql from "graphql-tag";


const add_patients = gql`
mutation MyMutation($name: String!, $p_id: uuid!, $phone: String!, $address: String!) {
  insert_patients(objects: {name: $name, p_id: $p_id, phone: $phone, address: $address}) {
    returning {
      p_id
    }
  }
}
`

export {add_patients}

