const express = require('express')
const routes = express.Router()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Student = mongoose.model("Student")
const Assignment = mongoose.model("Assignment")
const Marks = mongoose.model("Marks")
const bcrypt = require('bcrypt')
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bidmafia007@gmail.com',
    pass: 'msodqaowigryvpvb'
  }
});
var subject="";
var exam="";
var result_exam="";
routes.get('/', (req, res) => {
    res.send('hello world')
})
routes.post('/singup', (req, res) => {
   
    const { name, email, password, mobilenumber, birthdate, presentaddress, permanentaddress, gender, cast, branch, degree, } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({ error: "please add all the fields" })
    }
    Student.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ msg: "user already exists with that email" })
            }
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const student = new Student({
                        email,
                        password: hashedpassword,
                        name,
                        mobilenumber,
                        birthdate,
                        presentaddress,
                        permanentaddress,
                        gender,
                        cast,
                        branch,
                        degree,
                        roll:"student",

                    })

                    student.save()
                        .then(user => {
                            // transporter.sendMail({
                            //     to:user.email,
                            //     from:"no-reply@insta.com",
                            //     subject:"signup success",
                            //     html:"<h1>welcome to instagram</h1>"
                            // })
                            var mailOptions = {
                                from: 'deepdonda007@gmail.com',
                                to: user.email,
                                subject: 'Sending Email using Node.js',
                                text: 'welcome to  student portal'
                              };
                            transporter.sendMail(mailOptions, function(error, info){
                                if (error) {
                                  console.log(error);
                                } else {
                                  console.log('Email sent: ' + info.response);
                                }
                              });
                            let payload = { subjet: user._id }
                            let token = jwt.sign(payload, 'secretket')
                            res.json({token:token})
                        })

                        .catch(err => {
                            console.log(err)
                            res.json({ msg: "student not register" })
                        })
                })

        })
        .catch(err => {
            console.log(err)
            res.json({ msg: "student not  register" })
        })

})

routes.post('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ error: "please add email or password" })
    }
    Student.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Email or password" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        let payload = { subjet: savedUser._id }
                        let token = jwt.sign(payload, 'secretket')
                       res.json({'token':token,'email':savedUser.email,'roll':savedUser.roll})
                    }
                    else {
                        return res.status(422).json({ error: "Invalid Email or password" })
                    }
                })
                .catch(err => {
                    console.log(err)
                    return res.status(422).json({ error: "Invalid Email or password" })
                })
        })
})

routes.get('/getalluser', (req, res, next) => {
    Student.find({}, (err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
        res.send( users )
    })
})
routes.post('/addmark', (req, res, next) => {
    var users=req.body;
    for(var i=0;i<users.length;i++)
    {
        var marks=new Marks({
            examname:this.exam,
            subject:this.subject,
            
            studentmail:users[i].user,
            marks:users[i].mark,
        })
        try {
            doc = marks.save();
            console.log("mark added");
            
        }
        catch (err) {
            return res.status(501).json(err);
        }        
    }
    return res.status(201).json(doc);
})
//add_exam_subject_name
routes.post('/add_exam_subject_name', (req, res, next) => {
    
    this.exam=req.body.exam;
    this.subject=req.body.subject;
    res.json({ massag: "subject and exam name set" })
})
routes.post('/add_result_exam_name', (req, res, next) => {
    
    this.result_exam=req.body.exam;    
    res.json({ massage: this.result_exam })
})
routes.get('/getmark/:email',(req,res,next)=>{
    Marks.find({studentmail:req.params.email ,examname:this.result_exam},(err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
        res.send( users )
    })
})
module.exports = routes