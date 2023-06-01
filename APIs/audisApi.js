const exp = require('express')
const audiApp = exp.Router()

const expressAsyncHandler = require('express-async-handler')

const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const verifyToken = require('../APIs/middlewares/verifyToken')

//import multerObj
const multerObj = require('./middlewares/cloudinaryConfig')

audiApp.use(exp.json())

audiApp.get('/audis',expressAsyncHandler(
    async(request,response)=>{
        const audisCollection = request.app.get('audisCollection')
        let allAudis = await audisCollection.find().toArray();
        // console.log(allAudis)
        response.status(200).send({message:"audis data",payload:allAudis})
    }
))


module.exports = audiApp