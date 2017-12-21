import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} from 'graphql'

import {
UserType
} from './model'

// import mongoose from 'mongoose'
// import userApi from '../../api/user'
import config from '../../config'

const request = require('request-promise')
const BASE_URL = config.base
// const UserModel = mongoose.model('User')

function fetchResponseByURL (relativeURL) {
return request({
  url: `${BASE_URL}${relativeURL}`,
  json: true
})
}

function fetchUser () {
return fetchResponseByURL('/api/users')
}

function fetchUserByURL (relativeURL) {
return fetchResponseByURL(relativeURL)
}

const User = {
type: UserType,
args: {
  id: {
    name: 'id',
    type: new GraphQLNonNull(GraphQLID)
  }
},
resolve (root, params, options) {
  return fetchUserByURL(`/api/users/${params.id}`)
  // return UserModel.findOne({_id: params.id}).exec()
}
}

const Users = {
type: new GraphQLList(UserType),
args: {},
resolve (root, params, options) {
  return fetchUser()
  // return UserModel.find({}).exec()
}
}

export default {
User: User,
Users: Users
}
