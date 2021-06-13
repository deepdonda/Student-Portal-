const express = require('express')
const routes = express.Router()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Student = mongoose.model("Student")
const Assignment = mongoose.model("Assignment")
const Marks = mongoose.model("Marks")
const Notice=mongoose.model("Notice")
const Course=mongoose.model("Course")
const bcrypt = require('bcrypt')
var multer = require('multer')
routes.get('/', (req, res) => {
    res.send('hello world from course')
})

routes.get('/course/:department', (req, res) => {
    Student.find({branch:req.params.department,roll:"teacher"},(err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
        res.status(200).json(users)
        
    })  
})
routes.post('/addcource', (req, res, next) => {
    console.log(req.body.subjectname);
    var course = new Course({
        subjectname: req.body.subjectname,
        department: req.body.department,
        teacher1: req.body.teacher1,
       

    })
    course.save().then(assignment => {
        res.json({ message: "saved successfully" })
    }).catch(err => {
        console.log(err)
    })
})
routes.get('/subject/:email', (req, res) => {
    Course.find({teacher1:req.params.email},(err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
        res.status(200).json(users)
        
    })  
})
routes.get('/allcource/:department', (req, res) => {
    Course.find({department:req.params.department},(err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
        res.status(200).json(users)
        
    })  
})
routes.delete('/deletecource/:id', (req, res) => {
    Course.deleteOne({_id:req.params.id},(err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
        res.status(200).json(users)
    })
        
    

})

module.exports = routes
