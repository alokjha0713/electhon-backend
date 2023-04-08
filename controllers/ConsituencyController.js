const mongoose=require("mongoose")
const BigPromise=require('../middleware/bigpromise')
const Area=require('../models/consituency')


exports.addArea=BigPromise(async (req,res)=>{

    const{pincode,areaName}=req.body

    console.log(req.body)

    const area=await Area.create({
        pincode,
        areaName
    })

    res.status(200).json({
        area
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
    const area=await Area.find({pincode:pin},{areaName:1});

    res.status(200).json({
        area
    })
  
})