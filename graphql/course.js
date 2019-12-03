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
const Course = mongoose.model('Course')

const objType = new GraphQLObjectType({
  name: 'meta',
  fields: {
    createdAt: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    }
  }
})

let CourseType = new GraphQLObjectType({
  name: 'Course',
  fields: {
    _id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    desc: {
      type: GraphQLString
    },
    page: {
      type: GraphQLInt
    },
    author: {
      type: new GraphQLList(GraphQLString)
    },
    meta: {
      type: objType
    }
  }
})


const course = {
  type: new GraphQLList(CourseType),
  args: {},
  resolve (root, params, options) {
    return Course.find({}).exec()
  }
}

const addCourse = {
  type: new GraphQLList(CourseType),
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    desc: { type: new GraphQLNonNull(GraphQLString) },
    page: { type: new GraphQLNonNull(GraphQLInt) },
    author: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    // const course = new Course(opts)
    // const saveCourse = await course.save()
    console.log(111, args)
    return Course.create(args);
  }
}

module.exports = {
  course,
  addCourse
}
