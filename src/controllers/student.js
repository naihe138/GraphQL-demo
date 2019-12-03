const mongoose = require('mongoose')

const Student = mongoose.model('Student')
const Info = mongoose.model('Info')

const saveStudent = async (ctx, next) => {
  const opts = ctx.request.body
  
  const student = new Student(opts)
  const saveStudent = await student.save()

  if (saveStudent) {
    ctx.body = {
      success: true,
      data: saveStudent
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

const fetchStudent = async (ctx, next) => {
  const students = await Student.find({})

  if (students.length) {
    ctx.body = {
      success: true,
      data: students
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

const fetchStudentDetail = async (ctx, next) => {
  const info = await Info.find({studentId: ctx.request.query.id})
  if (info.length) {
    ctx.body = {
      success: true,
      data: info[0]
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

module.exports = {
  saveStudent,
  fetchStudent,
  fetchStudentDetail
}
