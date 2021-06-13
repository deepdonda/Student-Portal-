const express = require('express')
const routes = express.Router()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Student = mongoose.model("Student")
const Assignment = mongoose.model("Assignment")
const Marks = mongoose.model("Marks")
const Notice=mongoose.model("Notice")
const bcrypt = require('bcrypt')
var multer = require('multer')
const { urlencoded } = require('body-parser')
routes.get('/', (req, res) => {
    res.send('hello world from notic')
})
function getTime() {
    var today = new Date().toLocaleDateString()
    today = today.toString().replace('/', '-')
    today = today.replace('/', '-')

    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    today += '-' + h + '-' + m + '-' + s;
   

    return today;
}
var storage = multer.diskStorage({

    destination: (req, file, callBack) => {
        callBack(null, 'C:\\Users\\deep\\OneDrive\\Desktop\\sem6\\oose\\angular\\demo\\src\\assets\\notice')
    },
    filename: (req, file, callBack) => {
        callBack(null, `${getTime()}-${file.originalname}`)
    }
})
var upload = multer({ storage: storage })


routes.post("/addnotice", upload.single('file'), (req, res, next) => {
    var file = req.file
    var notice = new Notice({
        titale: req.body.titale,
        description: req.body.description,
        file:file.filename,       
    })
    try {
        doc = notice.save();
        console.log("your notice is added");
        return res.status(201).json(doc);
    }
    catch (err) {
        return res.status(501).json(err);
    }
})

routes.get('/getnotice', (req, res) => {
    Notice.find((err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
        res.status(200).json(users)
    })
        
    

})
routes.get('/notice/:id', (req, res) => {
    Notice.find({_id:req.params.id},(err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
        res.status(200).json(users)
    })
        
    

})
routes.delete('/deletenotice/:id', (req, res) => {
    Notice.deleteOne({_id:req.params.id},(err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
        res.status(200).json(users)
    })
        
    

})
routes.post('/updatenotice', (req, res,next) => {
    //console.log(req.body)
    
    Notice.updateOne({_id:req.body.id},{titale:req.body.titale,description:req.body.description},(err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
       // console.log(users)
        res.status(200).json(users)
    })
        
    

})
routes.put('/updatenotice', upload.single('file'),(req, res,next) => {
    //console.log(req.body)
    var file = req.file
    Notice.updateOne({_id:req.body.id},{titale:req.body.titale,description:req.body.description,file:file.filename},(err, users) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
       // console.log(users)
        res.status(200).json(users)
    })
        
    

})


module.exports = routes
