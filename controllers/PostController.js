const Slot=require('../models/Slot')
const BigPromise=require('../middleware/bigpromise');
const jwt=require('jsonwebtoken')
const User=require('../models/user')

exports.createPost=(BigPromise(async(req,res)=>{
    
    const token=req.params.token;
    const decode=jwt.verify(token,"thisismynoteapp")
    console.log("DECODE "+decode)

    const user=await User.findById(decode.id);

    console.log(user)

    console.log(token);
}))