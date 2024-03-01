const exp = require('express')
const userApp = exp.Router()
require('dotenv').config()

const expressAsyncHandler = require('express-async-handler')

const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const verifyToken = require('../APIs/middlewares/verifyToken')

//import multerObj
const multerObj = require('./middlewares/cloudinaryConfig')


// User Registration

//body parser
userApp.use(exp.json())

userApp.post('/register-user',multerObj.single('userimage'),expressAsyncHandler(
    async(request,response)=>{
        const usersCollection = request.app.get('usersCollection')
        const newUser = JSON.parse(request.body.user) 
        let result = await usersCollection.findOne({username:newUser.username})
        // console.log(result)
        if(result!==null){
            response.status(200).send({message:"Username already exists"})
        }
        else{
            //add cdn link upload cdn link of cloudinary image to user object
            newUser.image = request.file.path;

            // hash the password before pushing into database
            let hashedPassword = await bcryptjs.hash(newUser.password,5)
            newUser.password = hashedPassword
            // push into database
            await usersCollection.insertOne(newUser)
            // send response
            response.status(201).send({message:"User Registered"})
        }
    }
))

userApp.post('/login-user',expressAsyncHandler(async(request,response)=>{

    //get user collection
    const userCollectionObj=request.app.get("usersCollection")
  
    //get user from client
    const userCredentialsObj=request.body;
  
    //verify username of userCredentialsObj
    let userOfDB=await userCollectionObj.findOne({username:userCredentialsObj.username})
  
    //if username is invalid
    if(userOfDB===null){
      response.status(200).send({message:"Invalid username"})
    }
    //if username is valid
    else{
      //compare passwords
      let isEqual=await bcryptjs.compare(userCredentialsObj.password,userOfDB.password)
      //if passwords not matched
      if(isEqual===false){
        response.status(200).send({message:"Invalid password"})
      }
      //passwords are matched
      else{
        //create JWT token
        let signedJWTToken=jwt.sign({username:userOfDB.username},process.env.SECRET_KEY,{expiresIn:"1d"})
        //send token in response
        response.status(200).send({message:"success",token:signedJWTToken,user:userOfDB})
      }
  
    }
  
  }))

module.exports = userApp