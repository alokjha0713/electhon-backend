const mongoose=require('mongoose')

const AreaSchema=mongoose.Schema({

    pincode:{
        type:String
    },
    areaName:{
        type:String
    },
    description:{
        type:String
    },
    url:{
        type:String
    }
})

module.exports=mongoose.model('Area',AreaSchema);