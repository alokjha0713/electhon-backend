const mongoose=require("mongoose")
const BigPromise=require('../middleware/bigpromise')
const User=require('../models/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const cookieToken=require('../config/cookieToken')

exports.signup=BigPromise(async (req,res)=>{
    
    console.log("Enter")
    const {name,email,password,mobileNumber,Address}=req.body

    const user1=await User.findOne({email:email})
    
    if(user1){
        return res.status(400).json({
            message:"User ALREADY EXSIST"
        })
    }
    if(!name || !email || !password || !mobileNumber || !Address){
       return res.status(401).json({
        success:true,
        message:"Please Provide The required Information"
       })
    }
    
   const user= await  User.create({
        name,
        email,
        password,
        mobileNumber,
        Address
    })

    const token=user.getJwtToken()

    // cookieToken(user,res)

    res.status(200).json({
        success:true,
        user,
        token
    })
    
})

exports.signIn=BigPromise(async (req,res)=>{

    const {email,password}=req.body
    console.log("password "+password)

//    const token1=req.cookies.token;

//    console.log("Cookie Token "+token1)


    const user=await User.findOne({email:email}).select("+password") 

    if(!user)
    {
        return res.status(401).json({
            message:"User does not exsist Plz Signup"
        })
    }

    if(!await  bcrypt.compare(password,user.password)){
       
        return res.status(401).json({
            message:"Password does not match "
        })
    }
    // cookieToken(user,res)
    const token=user.getJwtToken()
    res.status(200).json({
        user,
        token
    })
    
})

exports.profile=BigPromise(async(req,res)=>{
    
    const token=req.params.token;
    const decode=jwt.verify(token,process.env.JWT_SECRET)
    // console.log(decode) 
    
    const user=await User.findById(decode.id);

    res.status(200).json({
        user
    })
})

