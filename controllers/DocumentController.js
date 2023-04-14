const Document=require('../models/DocumentUpload')
const BigPromise=require('../middleware/bigpromise')
const nodemailer=require('nodemailer');
const { param } = require('../routes/document');

exports.addDocument=(BigPromise(async (req,res)=>{
    console.log(req.body);
    const {email,url}=req.body

    const params=req.params.id;
    console.log(params)

    const map=new Map();
    map.set('0','7 - 7:30')
    map.set('1','7:30 - 8:00')
    map.set('2','8:00 - 8:30')
    map.set('3','8:30 - 9:00')
    map.set('4','9:00 - 9:30')
    map.set('5','9:30 - 10:00')
    map.set('6','10:00 - 10:30')
    map.set('7','10:30 - 11:00')
    map.set('8','11:00 - 11:30')
    map.set('9','11:30 - 12:00')
    map.set('10','11:30 - 12:00')
    map.set('11','12:00 - 12:30 P.M')
    map.set('12','12:30 - 13:00 P.M')
    map.set('13','13:00 - 13:30 P.M')
    map.set('14','13:30 - 14:00 P.M')
    map.set('14','14:00 - 14:30 P.M')
    map.set('15','14:30 - 15:00 P.M')
    map.set('16','15:00 - 15:30 P.M')
    map.set('17','15:30 - 16:00 P.M')
    map.set('18','16:00 - 16:30 P.M')
    map.set('19','16:30 - 17:00 P.M')

    console.log("Map "+map.get(params))
    const document=await Document.create({
        email,
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
        html:`<h1>Congratulations !! Your Slot is Booked for ${map.get(params)} You can Track Your route to the polling booth from the below Link   localhost:3001/map </h1>`
        
    }

    transporter.sendMail(mailOptions,(error,info)=>{

        if(error)
            console.log('Error ',error);
        else
            console.log('Email Sent '+info.response)
    })
    res.status(200).json({
        document
    })
}))
