const mongoose=require('mongoose');
const user = require('./user');


const postSchema=mongoose.Schema({

    body:{
        type:String,
    },
    pic:{
        type:String,
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    print:{
        type:String,
        default:"1"
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    
    comments: [{
        comment: { type: String },
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    }],
    
        
    
})

module.exports=mongoose.model('POST',postSchema);
