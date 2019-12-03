window.onload = function () {
  // 点击常规获取班级学生列表
  $('#btn2').click(function() {
    $.ajax({
      url: '/student',
      data: {},
      success:function (res){
        if (res.success) {
          renderStudent (res.data)
        }
      }
    })
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
        query: `query{
          student{
            _id
            name
            sex
            age
          }
          course{
            title
            desc
          }
        }`
      },
      success:function (res){
        renderStudent (res.data.student)
        renderCourse (res.data.course)
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
    
  })
  

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