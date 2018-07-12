const express=require('express')
const path =require('path')


const accountRouter =express.Router()
const accountCtrl =require(path.join(__dirname,'../controllers/accountCtrl.js'))

accountRouter.get('/login',accountCtrl.getLoginPage)
accountRouter.get('/vcode',accountCtrl.getLoginImage)

module.exports=accountRouter