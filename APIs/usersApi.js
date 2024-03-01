const exp = require('express')
const userApp = exp.Router()

const expressAsyncHandler = require('express-async-handler')

const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

userApp.use(exp.json())


userApp.post('/register-user',expressAsyncHandler(
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
            // newUser.image = request.file.path;

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