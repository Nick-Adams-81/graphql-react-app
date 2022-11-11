
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

const People = () => {
    const { loading, error, data } = useQuery(PEOPLE_QUERY)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    return data.people.map(({ id, name, username, phone, address: {street, suite, city} }) => (
        <div key={id}>
            <h1>Name: {name}</h1>
            <h3>Username: {username}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Address: {street}, {suite}, {city}</h3>
        </div>
    ))
  
};
export default People;
