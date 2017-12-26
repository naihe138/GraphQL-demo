import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

import {info, infos} from './info'
import {course} from './course'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      infos,
      info,
      course
    }
  })
})
