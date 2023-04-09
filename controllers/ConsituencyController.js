const mongoose=require("mongoose")
const BigPromise=require('../middleware/bigpromise')
const Area=require('../models/consituency')
const Slot=require('../models/Slot')

exports.addArea=BigPromise(async (req,res)=>{

    const{pincode,areaName}=req.body

    console.log(req.body)

    const area1=await Area.findOne({area:areaName})

    console.log("Area 1 "+area1)
    console.log(area1)
    if(area1!=null){
        return res.status(200).json({
            message:"Area Already Exsist "
        })
    }

    let timeArray=[];
    for(let i=0;i<20;i++){
        timeArray.push({
            id:i
        })
    }
    const area=await Area.create({
        pincode,
        areaName
    })

    
    const slot=await Slot.create({
        area:areaName,
        timeslot:timeArray
    })

})

exports.getArea=BigPromise(async(req,res)=>{

    const pin=req.params.pincode;
    
    console.log("Pin "+pin);
    if(!pin){
        return res.status(401).json({
            message:"Plz Provide The Pincode "
        })
    }
    const area=await Area.find({pincode:pin},{areaName:1,_id:0});

    res.status(200).json({
        area
    })
  
})