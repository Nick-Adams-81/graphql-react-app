const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
  } = graphql;
  const AddressType = require("./AddressType")
  const CompanyType = require('./CompanyType')



const PeopleType = new GraphQLObjectType({
    name: "Person",
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      username: { type: GraphQLString },
      email: { type: GraphQLString },
      phone: { type: GraphQLString },
      website: { type: GraphQLString },
      address: { type: AddressType },
      company: { type: CompanyType }
    }),
  });

  module.exports = PeopleType;