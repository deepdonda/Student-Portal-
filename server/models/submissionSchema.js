const mongoose =require('mongoose')
const submissionSchema=new mongoose.Schema({
    
    assignmentid:{
        type:String,
        required:true
    },
    studentid:{
        type:String,
        required:true
    },
    
    submitionfile:{
        type:String,
        required:true
    },
    teacherid:{
        type:String,
        required:true
    }
    
    
    


    
})
mongoose.model("Submission",submissionSchema)