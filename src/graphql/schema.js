const { gql } = require('apollo-server-koa')
const mongoose = require('mongoose')

const CourseModel = mongoose.model('Course')
const InfoModel = mongoose.model('Info')
const StudentModel = mongoose.model('Student')

const typeDefs = gql`
  type Course {
    title: String
    desc: String
    page: Int
    author: String
  }
  type Info {
    height: String
    weight: String
    hobby: [String],
    studentId: ID,
    _id: ID
  }
  type Student {
    name: String
    sex: String
    age: Int,
    _id: ID,
    info: Info
  }
  type Query {
    getCourse: [Course]
    getStudent: [Student]
    getStudentInfo(id: ID): Info
    getInfo: [Info]
  }
  type Mutation {
    addCourse(post: CourseInput): Course,
    addStudent(post: StudentInput): Student
    addStudentInfo(id: ID, height: String, weight: String, hobby: [String]): Info
    changeStudentInfo(id: ID, height: String, weight: String, hobby: [String]): Info
  }
  input CourseInput {
    title: String
    desc: String
    page: Int
    author: String
  }
  input StudentInput {
    name: String
    sex: String
    age: Int
  }
`

const resolvers = {
  Query: {
    getCourse: (parent, args, context, info) => {
      return CourseModel.find({})
    },
    getStudent: (parent, args, context, info) => {
      return StudentModel.find({})
    },
    getStudentInfo: async (parent, args, context, info) => {
      let res = await InfoModel.find({studentId: args.id})
      return res[0]
    },
    getInfo: (parent, args, context, info) => {
      return InfoModel.find({})
    }
  },
  Mutation: {
    addCourse: (parent, args, context) => {
      const { title, desc, page, author } = args.post
      return CourseModel.create({title, desc, page, author})
    },
    addStudent: (parent, args, context) => {
      const { name, sex, age } = args.post
      return StudentModel.create({name, sex, age })
    },
    addStudentInfo: (parent, args, context) => {
      const { id, height, weight, hobby } = args
      return InfoModel.create({ hobby, height, weight, studentId: id })
    },
    changeStudentInfo: (parent, args, context) => {
      const { id, height, weight, hobby } = args
      return InfoModel.findOneAndUpdate({studentId: id }, { hobby, height, weight })
    }
  }
}

module.exports = {
  resolvers,
  typeDefs
}
