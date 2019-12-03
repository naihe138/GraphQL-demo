window.onload = function () {
  // 点击常规获取班级学生列表
  $('#btn2').click(function() {
    getStudent()
  })
  // 点击常规获取课程列表
  $('#btn1').click(function() {
    getCouse()
  })

  // 点击graphQL一次获取所有数据，问你怕不怕？
  $('#btn3').click(function() {
    $.ajax({
      url: '/graphql',
      data: {
        query: `query {
          getCourse{
            title
            page
            author
            desc
          }
          getStudent{
            name
            sex
            age
          }
        }`
      },
      success:function (res){
        renderStudent (res.data.getStudent)
        renderCourse (res.data.getCourse)
      }
    })
  })

  // 点击添加课程数据
  $('#btn4').click(() => {
    $('#side').css({
      transform: 'translateX(0px)'
    })
  })
  // 点击关闭课程数据
  $('#closeCourse').click(() => {
    $('#side').css({
      transform: 'translateX(-320px)'
    })
  })
  // 常规添加课程
  $('#add_class').click(() => {
    $('#side').css({
      transform: 'translateX(-320px)'
    })
    $.ajax({
      url: '/savescourse',
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        title: $('#c_title').val(),
        desc: $('#c_desc').val(),
        page: Number($('#c_page').val()),
        author: $('#c_author').val(),
      }),
      success:function (res){
        getCouse()
        $('#side').css({
          transform: 'translateX(-320px)'
        })
      }
    })
  })

  // gql添加课程
  $('#qal_add_class').click(() => {
    const title = $('#c_title').val()
    const desc = $('#c_desc').val()
    const page = Number($('#c_page').val())
    const author = $('#c_author').val()
    $.ajax({
      url: '/graphql',
      contentType: "application/json",
      type:'POST',
      data: JSON.stringify({
        query: `
          mutation {
            addCourse (post: {
              title: "${title}"
              desc: "${desc}"
              page: ${page}
              author: "${author}"
            }) {
              title
              desc
              page
              author
            }
          }
        `
      }),
      success:function (){
        getCouse()
        $('#side').css({
          transform: 'translateX(-320px)'
        })
      }
    })
  })

  // 点击添加课程数据
  $('#btn5').click(() => {
    $('#side2').css({
      transform: 'translateX(0px)'
    })
  })
  // 点击关闭课程数据
  $('#closeStudent').click(() => {
    $('#side2').css({
      transform: 'translateX(-320px)'
    })
  })
 
  // 常规添加学生
  $('#add_student').click(() => {
    $('#side').css({
      transform: 'translateX(-320px)'
    })
    $.ajax({
      url: '/savestudent',
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        name: $('#s_name').val(),
        sex: $('#s_sex').val(),
        age: Number($('#s_age').val())
      }),
      success:function (res){
        getStudent()
        $('#side2').css({
          transform: 'translateX(-320px)'
        })
      }
    })
  })

  // gql添加学生
  $('#qal_add_student').click(() => {
    const name = $('#s_name').val()
    const sex = $('#s_sex').val()
    const age = Number($('#s_age').val())
    $.ajax({
      url: '/graphql',
      contentType: 'application/json',
      type:'POST',
      data: JSON.stringify({
        query: `
          mutation {
            addStudent (post: {
              name: "${name}"
              sex: "${sex}"
              age: ${age}
            }) {
              name
              sex
              age
            }
          }
        `
      }),
      success:function (){
        getStudent()
        $('#side2').css({
          transform: 'translateX(-320px)'
        })
      }
    })
  })

  // 获取全部课程
  function getCouse () {
    $.ajax({
      url: '/course',
      data: {},
      success:function (res){
        if (res.success) {
          renderCourse(res.data)
        }
      }
    })
  }
  // 获取全部学生
  function getStudent () {
    $.ajax({
      url: '/student',
      data: {},
      success:function (res){
        if (res.success) {
          renderStudent(res.data)
        }
      }
    })
  }

  function renderStudent (data) {
    var str = ''
    data.forEach(function(item) {
      str += '<li>姓名：'+item.name+'，性别：'+item.sex+'，年龄：'+item.age+'</li>'
    })
    $('#studentList').html(str)
  }

  function renderCourse (data) {
    var str = ''
    data.forEach(function(item) {
      str += '<li>课程：'+item.title+'，简介：'+item.desc+'</li>'
    })
    $('#courseList').html(str)
  }

}