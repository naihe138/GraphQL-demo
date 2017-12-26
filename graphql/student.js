import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  isOutputType,
  GraphQLInt
} from 'graphql';

import mongoose from 'mongoose'

import {InfoType} from './info'
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


export const student = {
  type: new GraphQLList(StudentType),
  args: {},
  resolve (root, params, options) {
    return Student.find({}).populate({
      path: 'info',
      select: 'hobby height weight'
    }).exec()
  }
}
