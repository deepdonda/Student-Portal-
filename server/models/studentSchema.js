const mongoose =require('mongoose')
const studentSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    password:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:String,
        //required:true
    },
    birthdate:{
        type:Date,
       // required:true
    },
    presentaddress:{
        type:String,
        //required:true
    },
    permanentaddress:
    {
        type:String,
    },
    gender:
    {
        type:String,
    },
    cast:
    {
        type:String,
    },
    branch:
    {
        type:String,
    },
    degree:
    {
        type:String,
    },
    roll:
    {
        type:String,
    }

    


    
})
mongoose.model("Student",studentSchema)