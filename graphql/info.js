
const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  isOutputType
} = require('graphql')
const mongoose = require('mongoose')

const Info = mongoose.model('Info')

const objType = new GraphQLObjectType({
  name: 'mete',
  fields: {
    createdAt: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    }
  }
})

let InfoType = new GraphQLObjectType({
  name: 'Info',
  fields: {
    _id: {
      type: GraphQLID
    },
    height: {
      type: GraphQLString
    },
    weight: {
      type: GraphQLString
    },
    hobby: {
      type: new GraphQLList(GraphQLString)
    },
    meta: {
      type: objType
    }
    // parameters: {
    //   type: new GraphQLList(parameterType)
    // }
  }
})


const infos = {
  type: new GraphQLList(InfoType),
  args: {},
  resolve (root, params, options) {
    return Info.find({}).exec()
  }
}


const info = {
  type: InfoType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    return Info.findOne({
      _id: params.id
    }).exec()
  }
}

module.exports = {
  infos,
  info,
  InfoType
}
