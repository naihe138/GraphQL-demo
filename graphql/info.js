
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  isOutputType
} from 'graphql';

import mongoose from 'mongoose'
const Info = mongoose.model('Info')


// const parameterType = new GraphQLObjectType({
//   name: 'parameters',
//   fields: {
//     key: {
//       type: GraphQLString
//     },
//     value: {
//       type: GraphQLString
//     }
//   }
// })


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

export let InfoType = new GraphQLObjectType({
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


export const infos = {
  type: new GraphQLList(InfoType),
  args: {},
  resolve (root, params, options) {
    return Info.find({}).exec()
  }
}


export const info = {
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
