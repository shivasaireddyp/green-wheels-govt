const exp = require('express')
const eventApp = exp.Router()

const expressAsyncHandler = require('express-async-handler')
const verifyToken = require('../APIs/middlewares/verifyToken')

eventApp.use(exp.json())

eventApp.post('/register-event',expressAsyncHandler(
    async(request,response)=>{
        const eventsCollection = request.app.get('eventsCollection')
        console.log("from events-api")
        let newEvent = request.body
        console.log(newEvent)
        // let result = await eventsCollection.findOne({eventname:newEvent.eventname})
        // if(result!=null){
        //     response.status(200).send({message:"Event not possible"})
        // }
        // else{
        //     response.status(201).send({message:"Event success"})

        // }
        // await eventsCollection.insertOne(newEvent)
        response.status(201).send({message:"Event regd."})
    }
))

module.exports = eventApp
