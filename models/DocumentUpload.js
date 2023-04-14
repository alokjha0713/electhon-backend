const mongoose=require('mongoose')

const DocumentSchema=mongoose.Schema({
    email:{
        type:String
    },
    url:{
        type:String
    }
})

module.exports=mongoose.model('Document',DocumentSchema);