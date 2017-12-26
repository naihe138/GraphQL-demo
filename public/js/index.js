window.onload = function () {

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

  $('#btn1').click(function() {
    $.ajax({
      url: '/course',
      data: {},
      success:function (res){
        if (res.success) {
          renderCourse(res.data)
        }
      }
    })
  })

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

}