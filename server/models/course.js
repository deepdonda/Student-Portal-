const mongoose =require('mongoose')
const courceSchema=new mongoose.Schema({
    
    subjectname:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    
    teacher1:{
        type:String,
        required:true
    },
    teacher2:{
        type:String,
    },
    
    
    


    
})
mongoose.model("Course",courceSchema)