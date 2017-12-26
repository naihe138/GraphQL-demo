import mongoose from 'mongoose'

const Info = mongoose.model('Info')

export const saveInfo = async (ctx, next) => {
  const opts = ctx.request.body
  
  const info = new Info(opts)
  const saveInfo = await info.save()
  console.log(saveInfo)

  if (saveInfo) {
    ctx.body = {
      success: true,
      data: saveInfo
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

export const fetchInfo = async (ctx, next) => {
  
  const infos = await Info.find({})

  if (infos.length) {
    ctx.body = {
      success: true,
      data: infos
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}