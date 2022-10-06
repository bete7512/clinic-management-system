import { ApolloClient,createHttpLink,InMemoryCache } from "@apollo/client/core";
const getHeaders = () => {
    const headers = {};
    const token = window.localStorage.getItem("Apollotoken");
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    } 
    return headers;
  };
const httpLink = createHttpLink({
    uri:'https://bursting-bluebird-12.hasura.app/v1/graphql',
    fetch,
    headers:getHeaders()
    // headers:{
    //   'x-hasura-admin-secret':'myadminsecretkey'
    // }
})

const apolloclient = new ApolloClient({
    link:httpLink,
    cache:new InMemoryCache()
})
export default apolloclient