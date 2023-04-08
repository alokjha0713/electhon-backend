const mongoose=require('mongoose')

const AreaSchema=mongoose.Schema({

    pincode:{
        type:String
    },
    areaName:{
        type:String
    }
})

module.exports=mongoose.model('Area',AreaSchema);