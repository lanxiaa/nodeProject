//导入express
const express =require('express')
const path =require('path')

//创建app
const app =express()
//node中 处理静态资源
app.use(express.static(path.join(__dirname,'statics')))
//集成中间件
const accountRot=require(path.join(__dirname,'./routers/accountRouter.js'))

app.use('/account',accountRot)

app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }
    console.log('start Ok~')
})