import gql from "graphql-tag";
const add_patients = gql`
mutation MyMutation($name: String!, $phone: String!, $p_id: uuid!, $health_num: String!, $address: String!) {
  insert_patients(objects: {name: $name, phone: $phone, p_id: $p_id, health_num: $health_num, address: $address}) {
    returning {
      p_id
    }
  }
}
`
const login = gql`
mutation MyMutation($password: String!, $username: String!) {
  login(objects: {password: $password, username: $username}) {
    accessToken
    id
    roles
  }
}
`
const register_doctors = gql`
mutation MyMutation($speciality: String!, $phone: String!, $name: String!, $address: String!) {
  signupd(objects: {address: $address, name: $name, phone: $phone, speciality: $speciality}) {
    success
  }
}
`
const register_admins = gql`
mutation MyMutation($name: String!, $phone: String!, $address: String!) {
  signupa(objects: {address: $address, name: $name, phone: $phone}) {
    success
  }
}
`
const register_recieptionist = gql`
mutation MyMutation($name: String = "", $phone: String = "", $address: String = "") {
  signupr(objects: {name: $name, phone: $phone, address: $address}) {
    success
  }
}
`
const add_recieptionists = gql`
mutation MyMutation($name: String!, $phone: String!, $address: String!) {
    signupr(objects: {address: $address, name: $name, phone: $phone}) {
      success
    }
  }  
`
const query_patients = gql`
query MyQuery {
  patients {
    name
    phone
    p_id
    address
    registered_at
    health_num
  }
}
`
const query_doctors = gql`
query MyQuery {
  doctors {
    name
    phone
    speciality
    d_id
    address
  }
  doctors_aggregate {
    aggregate {
      count
    }
  }
}
`
const query_users = gql`
query MyQuery {
  users {
    id
    isactive
    name
    roles
    username
    phone
  }
  users_aggregate(where: {isactive: {_eq: true}}) {
    aggregate {
      count
    }
  }
}
`
const query_recieptionist = gql`
query MyQuery {
  recieptionists {
    name
    address
    phone
    r_id
  }
  recieptionists_aggregate {
    aggregate {
      count
    }
  }
}
`
const insert_history = gql`
mutation MyMutation($diseases_name: String!, $h_id: uuid!, $labratory_result: String!, $patients: uuid!, $prescription: String!, $doctors: uuid = "") {
  insert_history(objects: {diseases_name: $diseases_name, labratory_result: $labratory_result, patients: $patients, prescription: $prescription, h_id: $h_id, doctors: $doctors}) {
    returning {
      doctors
    }
  }
}
`
const query_patient_history = gql`
query MyQuery($p_id: uuid!) {
  history(where: {patients: {_eq: $p_id}}) {
    diseases_name
    doctors
    h_id
    labratory_result
    patients
    prescription
    doctor {
      d_id
      name
      address
      phone
      speciality
    }
  }
}
`
const  insert_orders = gql`
mutation MyMutation($health_num: String!, $order: Int!, $p_id: uuid!) {
  insert_orders_token(objects: {health_num: $health_num, order: $order, p_id: $p_id}) {
    returning {
      health_num
      order
      p_id
      patient {
        name
      }
    }
  }
}
`
const query_orders = gql`
query MyQuery {
  orders_token(order_by: {order: asc}) {
    health_num
    order
    p_id
    queued_at
    patient {
      name
    }
  }
  orders_token_aggregate {
    aggregate {
      count
    }
  }
}
`



const query_order_by_health_num = gql`
query MyQuery($health_num: String!) {
  orders_token(where: {health_num: {_eq: $health_num}}) {
    health_num
    order
    p_id
    queued_at
  }
}
`
const query_patient_by_health_num = gql`
query MyQuery($health_num: String!) {
  patients(where: {health_num: {_eq: $health_num}}) {
    health_num
    name
    p_id
  }
}
`

const add_bills = gql`
mutation MyMutation($bill_id: uuid!, $helth_num: String!, $p_id: uuid!, $payment_for: String!, $recieptionist: uuid!, $total: Int!) {
  insert_bills(objects: {bill_id: $bill_id, helth_num: $helth_num, p_id: $p_id, payment_for: $payment_for, recieptionist: $recieptionist, total: $total}) {
    returning {
      bill_id
    }
  }
}
`
export {add_bills,query_patient_by_health_num,query_order_by_health_num,insert_orders,query_patient_history,query_orders,register_recieptionist,query_users,add_patients,register_doctors,query_recieptionist,register_admins,add_recieptionists,login,query_patients,query_doctors,insert_history};

