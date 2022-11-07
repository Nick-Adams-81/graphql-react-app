const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
  } = graphql;

const AddressType = new GraphQLObjectType({
    name: "Address",
    fields: () => ({
      suite: { type: GraphQLString },
      street: { type: GraphQLString },
      city: { type: GraphQLString },
      zipcode: { type: GraphQLString },
    }),
  });

  module.exports = AddressType;