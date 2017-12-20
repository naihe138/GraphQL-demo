import Koa from 'koa'
import KoaStatic from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

import {database} from './mongodb'
import {saveInfo, fetchInfo} from './controllers/info'
import {saveStudent, fetchStudent, fetchStudentDetail} from './controllers/student'

database()

const app = new Koa()
const router = new Router();

app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));


router.post('/saveinfo', saveInfo)
      .get('/info', fetchInfo)
      .post('/savestudent', saveStudent)
      .get('/student', fetchStudent)
      .get('/studentDetail', fetchStudentDetail)

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000);

console.log('pwa server listen port: ' + 4000)