import { merge } from 'lodash';
import userResolvers from './User';

const resolvers = merge(userResolvers);

export default resolvers;
