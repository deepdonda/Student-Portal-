const mongoose =require('mongoose')
const noticeSchema=new mongoose.Schema({
    
    titale:{
        type:String,
        required:true
    },

    
    description:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    },    
})
mongoose.model("Notice",noticeSchema)