import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'
import {saveInfo, fetchInfo} from '../controllers/info'
import {saveStudent, fetchStudent, fetchStudentDetail} from '../controllers/student'


const router = require('koa-router')()

router.post('/saveinfo', saveInfo)
      .get('/info', fetchInfo)
      .post('/savestudent', saveStudent)
      .get('/student', fetchStudent)
      .get('/studentDetail', fetchStudentDetail)
      .get('/graphiql', async (ctx, next) => {
        await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
      })
module.exports = router