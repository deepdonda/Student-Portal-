const express = require('express')
const routes = express.Router()
const mongoose = require('mongoose')
const Student = mongoose.model("Student")
const Assignment = mongoose.model("Assignment")
const Submission = mongoose.model("Submission")
var multer = require('multer')
routes.get('/', (req, res) => {
    res.send('hello world from assignment')
})

function getTime() {
    var today = new Date().toLocaleDateString()
    today = today.toString().replace('/', '-')
    today = today.replace('/', '-')

    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    today += '-' + h + '-' + m + '-' + s

    return today;
}
var storage = multer.diskStorage({

    destination: (req, file, callBack) => {
        callBack(null, 'C:\\Users\\deep\\OneDrive\\Desktop\\sem6\\oose\\angular\\demo\\src\\assets\\submission')
    },
    filename: (req, file, callBack) => {
        callBack(null, `${getTime()}-${file.originalname}`)
    }
})
var upload = multer({ storage: storage })


routes.post("/submitassignment", upload.single('file'), (req, res, next) => {
    var file = req.file
    var assignmentid = req.body.assignmentid
    var studentid = req.body.studentid
    var array;
    var submission = new Submission({
        assignmentid: req.body.assignmentid,
        studentid: req.body.studentid,
        teacherid: req.body.teacherid,
        submitionfile: file.filename,
    })
    try
    {
        doc = submission.save();
        Assignment.findOne({ _id: req.body.assignmentid }, (err, users) =>
        {
            if (err) {
                res.status(500).json({ errmsg: err })
            }
            else
            {
                array = users.submission_student
                array.push(studentid)
                Assignment.updateOne({ _id: assignmentid }, { submission_student: array }, (err, assignment) => {
                    if (err) {
                        res.status(500).json({ errmsg: err })
                    }
                    else
                    {
                        console.log("your assignment is submited");
                        return res.status(201).json(assignment);
                    }
                })
               
            }
        })
    }
    catch (err) {
        return res.status(501).json(err);
    }
})
routes.get('/allsubmission/:id', (req, res) => {
   // console.log(req.params.id)
    Submission.find({'assignmentid':req.params.id},(err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
       // console.log(users)
        res.status(200).json(users)
    })
})
///////////////////////////////
//assignment
routes.get('/allassignment', (req, res) => {
    Assignment.find((err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
        res.status(200).json(users)
    })
})
routes.get('/all_t_assignment/:email', (req, res) => {
    Assignment.find({teacher:req.params.email},(err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
        res.status(200).json(users)
    })
})

routes.post('/addassignment', (req, res, next) => {
    var assignment = new Assignment({
        titale: req.body.f.titale,
        subject: req.body.f.subject,
        description: req.body.f.description,
        teacher: req.body.a,

    })
    assignment.save().then(assignment => {
        res.json({ message: "saved successfully" })
    }).catch(err => {
        console.log(err)
    })
})
routes.delete("/deleteassignment/:id", (req, res, next) => {
    var id = req.params.id
    console.log(req.params.id);
    Assignment.deleteOne({ _id: id }, (err) => {
        if (err) {
            console.log("err  in Assignment delete ");
        }
    })
    res.status(200).json({ msg: "yes,Assignment is deleted " })
})
module.exports = routes