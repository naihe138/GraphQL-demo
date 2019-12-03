const mongoose = require('mongoose')

const Student = mongoose.model('Student')

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
  const students = await Student.find({}).populate({
    path: 'info',
    select: 'hobby height weight'
  }).exec()

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

module.exports = {
  saveStudent,
  fetchStudent,
  fetchStudentDetail
}
