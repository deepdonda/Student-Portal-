var cors = require('cors')
var bodyParser = require('body-parser')
require('dotenv').config()
//const { Console } = require('console')
//var nodemailer = require('nodemailer');


const express =require('express')
const app=express()
const PORT=process.env.PORT || 3000
const mongoose=require('mongoose')
require('./models/studentSchema')
require('./models/assignmentSchema')
require('./models/submissionSchema')
require('./models/marksSchema')
require('./models/notice')
require('./models/course')
app.use(express.json())
app.use('/uploads',express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

var appRoutes=require('./routes/auth')
var markRoutes=require('./routes/marks')
var noticeRoutes=require('./routes/notice')
var AssignmentRoutes=require('./routes/assignment')
var CourseRoutes=require('./routes/course')
mongoose.Promise = global.Promise
mongoose.connect(process.env.URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true 

})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('error',(error)=>{
    console.log("error:",error)
})
app.use('/', appRoutes)
app.use('/notice',noticeRoutes)
app.use('/assignment',AssignmentRoutes)
app.use('/course',CourseRoutes)

app.listen(PORT,()=>
{
    console.log("server is runing on port:",PORT)
    
})