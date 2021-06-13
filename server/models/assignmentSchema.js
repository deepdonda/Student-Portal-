const mongoose =require('mongoose')
const assignmentSchema=new mongoose.Schema({
    
    titale:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    
    description:{
        type:String,
        required:true
    },
    teacher:{
        type:String,
        required:true
    },
    submission_student:
    {
        type  :Array,
        default:[]

    },
    
    


    
})
mongoose.model("Assignment",assignmentSchema)