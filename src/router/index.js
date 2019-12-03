const {saveInfo, fetchInfo} = require('../controllers/info')
const {saveStudent, fetchStudent, fetchStudentDetail} = require('../controllers/student')
const { saveCourse, fetchCourse } = require('../controllers/course')

const router = require('koa-router')()

router.post('/saveinfo', saveInfo)
router.get('/info', fetchInfo)
router.post('/savestudent', saveStudent)
router.get('/student', fetchStudent)
router.get('/studentDetail', fetchStudentDetail)
router.post('/savescourse', saveCourse)
router.get('/course', fetchCourse)

module.exports = router
