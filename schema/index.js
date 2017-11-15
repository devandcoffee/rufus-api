import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers';
import User from './User';

const rootQuery = `
  type Query {
    users: [User]
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, User],
  resolvers,
});

export default schema;
