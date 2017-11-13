import { makeExecutableSchema } from 'graphql-tools';

const rootQuery = `
  type Query {
    test: String!
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [rootQuery],
});

export default schema;
