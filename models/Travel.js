const mongoose=require('mongoose')

const TravelSchema=mongoose.Schema({
    email:{
        type:String
    },
    amount:{
        type:String
    },
    url:{
        type:String
    }
})

module.exports=mongoose.model('Travel',TravelSchema);