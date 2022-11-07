const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = graphql;

const CompanyType = new GraphQLObjectType({
    name: "Company",
    fields: () => ({
      name: { type: GraphQLString },
      catchPhrase: { type: GraphQLString },
      bs: { type: GraphQLString },
    }),
  });

  module.exports = CompanyType;