const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");
const axios = require("axios");
const PeopleType = require("./TypeDefs/PeopleType");
const myArr = []

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    people: {
      type: new GraphQLList(PeopleType),
      resolve(parent, args) {
        return axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.data);
      },
    },
    person: {
      type: PeopleType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`https://jsonplaceholder.typicode.com/users/${args.id}`)
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
