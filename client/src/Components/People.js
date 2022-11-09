
import { gql, useQuery } from "@apollo/client";

const PEOPLE_QUERY = gql`
  query {
    people {
      name
      username
      phone
      address {
        street
        suite
        city
      }
    }
  }
`;
function People () {
    const { loading, error, data } = useQuery(PEOPLE_QUERY)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>
    console.log(data)

    return data.people.map(({ id, name, username, phone, address }) => (
        <div key={id}>
            <h1>Name: {name}</h1>
            <h3>Username: {username}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Address: {address.street}, {address.city}</h3>
        </div>
    ))
  
};
export default People;
