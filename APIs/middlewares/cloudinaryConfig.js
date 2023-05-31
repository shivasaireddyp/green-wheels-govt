const cloudinary = require('cloudinary').v2;
const { request } = require('express');
const multer = require('multer')
const {CloudinaryStorage} = require('multer-storage-cloudinary')

// configure cloudinary
cloudinary.config({
    cloud_name:"dsh6gnm7i",
    api_key:"648787765991974",
    api_secret:"AeXd-bC2LQTV6PvI46DFPRcuqOQ"
})


// configure cloudinary storage
let clStorage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"emsproject",
        public_id:(request,file)=>file.fieldname+"-"+Date.now()
    }
})


//configure multer
let multerObj = multer({storage:clStorage})

//export
module.exports = multerObj