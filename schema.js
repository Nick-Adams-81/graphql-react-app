const {
  GraphqlObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");
const axios = require("axios");

const PeopleType = new GraphQLObjectType({
  name: "Person",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    address: { type: AddressType },
  }),
});

const AddressType = new GraphQLObjectType({
  name: "Address",
  fields: () => ({
    street: { type: GraphQLString },
    city: { type: GraphQLString },
    zipcode: { type: GraphQLString }
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    people: {
      type: new GraphQLList(PeopleType),
      resolve(parent, args) {
        return axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then(res => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
    query: RootQuery
})
