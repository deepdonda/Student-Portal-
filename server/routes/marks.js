const express = require('express')
const routes = express.Router()
const mongoose = require('mongoose')
const Student = mongoose.model("Student")
const Assignment = mongoose.model("Assignment")
const Marks=mongoose.model("Marks")
const bcrypt = require('bcrypt')
const { use } = require('./auth')
routes.get('/', (req, res) => {
    res.send('hello world')
})



module.exports = routes