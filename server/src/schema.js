const gql = require('graphql-tag');

const typeDefs = gql`
  # Schema definitions go here
  type Query {
    "Get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    photo: String
  }

  "A Track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }
`;
module.exports = { typeDefs };