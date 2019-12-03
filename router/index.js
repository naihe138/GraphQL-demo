const { graphqlKoa, graphiqlKoa } = require('graphql-server-koa')
const {saveInfo, fetchInfo} = require('../controllers/info')
const {saveStudent, fetchStudent, fetchStudentDetail} = require('../controllers/student')
const { saveCourse, fetchCourse } = require('../controllers/course')
const schema = require('../graphql/schema')

const router = require('koa-router')()

router.post('/saveinfo', saveInfo)
router.get('/info', fetchInfo)
router.post('/savestudent', saveStudent)
router.get('/student', fetchStudent)
router.get('/studentDetail', fetchStudentDetail)
router.post('/savescourse', saveCourse)
router.get('/course', fetchCourse)

router.post('/graphql', async (ctx, next) => {
  await graphqlKoa({ schema, graphiql: true })(ctx, next)
})
router.use('/graphql', async (ctx, next) => {
  await graphqlKoa({ schema, graphiql: true })(ctx, next)
})

router.get('/graphiql', async (ctx, next) => {
  await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
})

module.exports = router
