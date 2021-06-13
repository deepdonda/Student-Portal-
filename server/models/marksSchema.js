const mongoose =require('mongoose')
const marksSchema=new mongoose.Schema({
    
    examname:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    
    studentmail:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        required:true
    },
    
    


    
})
mongoose.model("Marks",marksSchema)