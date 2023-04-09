const Slot=require('../models/Slot')
const BigPromise=require('../middleware/bigpromise')

exports.getSlot=(BigPromise(async(req,res)=>{

    const area=req.params.areaName;
    console.log("Area "+area);

    if(!area){
        return res.status(200).json({
            message:"Plz Provide The Area "
        })
    }
    const slot=await Slot.find({area});

    
    res.status(200).json({
        slot
    })
}))