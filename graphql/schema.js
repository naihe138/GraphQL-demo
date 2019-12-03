const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const {info, infos} = require('./info')
const {course, addCourse} = require('./course')
const {student} = require('./student')

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      infos,
      info,
      course,
      student
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutations',
    fields: {
      addCourse
    }
  })
})
