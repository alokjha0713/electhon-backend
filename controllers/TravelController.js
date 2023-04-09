const Travel=require('../models/Travel')
const BigPromise=require('../middleware/bigpromise')
const nodemailer=require('nodemailer')

exports.addTravel=(BigPromise(async (req,res)=>{
    console.log(req.body);
    const {email,amount,url}=req.body

    const travel=await Travel.create({
        email,
        amount,
        url
    })

    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"elecathonsend@gmail.com",
            pass:"cplwgyyztljpevqd"
        }
    });

    const mailOptions={
        from:"elecathonsend@gmail.com",
        to:email,
        subject:"Refund Request Recieved",
        html:'<h1>Congratulations !! Your Refund Process Started </h1>'
    }

    transporter.sendMail(mailOptions,(error,info)=>{

        if(error)
            console.log('Error ',error);
        else
            console.log('Email Sent '+info.response)
    })
    res.status(200).json({
        travel
    })
}))
