const mongoose=require('mongoose')


const slotSchema=mongoose.Schema({

    area:{
        type:String,
    },
    timeslot:[{
        id:{
            type:String
        },
        availability:{
            type:String,
            default:50
        }
    }]
})

module.exports=mongoose.model('Slot',slotSchema);
