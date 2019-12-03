const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  isOutputType,
  GraphQLInt
} = require('graphql')

const mongoose = require('mongoose')
const {InfoType} = require('./info')

const Student = mongoose.model('Student')

let StudentType = new GraphQLObjectType({
  name: 'Student',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    sex: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    info: {
      type: InfoType
    }
  }
})


const student = {
  type: new GraphQLList(StudentType),
  args: {},
  resolve (root, params, options) {
    return Student.find({}).populate({
      path: 'info',
      select: 'hobby height weight'
    }).exec()
  }
}

module.exports = {
  student
}