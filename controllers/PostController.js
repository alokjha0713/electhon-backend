// const Slot=require('../models/Slot')
const BigPromise=require('../middleware/bigpromise');
const jwt=require('jsonwebtoken')
const User=require('../models/user')
const POST = require('../models/Post')
exports.createPost=(BigPromise(async(req,res)=>{
    
    const token=req.params.token;
    const decode=jwt.verify(token,"thisismynoteapp")
    console.log("DECODE "+decode)

    const user=await User.findById(decode.id);

    console.log(user)
    console.log(token);
    const  {body,pic} = req.body;
    // console.log("POST BODY "+pic)


    const posts= await  POST.create({
        body: body,
        pic: pic,
        postedBy:user.id,
    })
    res.status(200).json({
        success:true,
        user,
        token
    })
    
}))

exports.postAllData=BigPromise(async(req,res)=>{
    const token=req.params.token;
    POST.find()
        .populate("postedBy", "_id name Photo")
        .then(posts => res.json(posts))
        .catch(err => console.log(err))
    // const post=await POST.find({})
    
    // console.log("Get All Post !!!!!")
    // res.status(200).json({
    //    post
    // })
})

exports.likePosts=BigPromise(async(req,res)=>{

    const token=req.params.token;
    console.log("it is in like path    "+token)
    const decode=jwt.verify(token,"thisismynoteapp")
    console.log("DECODE in like posts"+decode.id)

    // POST.findByIdAndUpdate(req.body.postId, {
    //     $push: { likes: decode.id }
    // }, {
    //     new: true
    // }).populate("postedBy", "_id name photo")
    //     .exec((err, result) => {
    //         if (err) {
    //             return res.status(422).json({ error: err })
    //         } else {
    //             res.json(result)
    //         }
    //     })
    console.log(req.body.postId)
    const result = await POST.findByIdAndUpdate(req.body.postId, {
        $push: { likes: decode.id }
      }, {
        new: true
      }).populate("postedBy", "_id name photo").exec();
      console.log("resluts of like page      "+result)
      res.json(result);
    
})

exports.makeComments=BigPromise(async(req,res)=>{

    const token=req.params.token;
    console.log("it is in comment path    "+token)
    const decode=jwt.verify(token,"thisismynoteapp")

    const comment = {
        comment: req.body.text,
        postedBy: decode._id
    }
    const result = await POST.findByIdAndUpdate(req.body.postId, {
        $push: { comments: comment }
    }, {
        new: true
    })
    result.populate("comments.postedBy", "_id name").exec();

    result.populate("postedBy", "_id name photo").exec();
//     result.populate({
//   path: 'comments.postedBy',
//   select: '_id name'
// });

// result.populate({
//   path: 'postedBy',
//   select: '_id name photo'
// });

    console.log("resluts of comment page      "+result)
    res.json(result);
})

exports.unlikePosts=BigPromise(async(req,res)=>{

    const token=req.params.token;
    console.log("it is in makecomment path    "+token)
    const decode=jwt.verify(token,"thisismynoteapp")
    
    console.log(req.body.postId)
    const result = await POST.findByIdAndUpdate(req.body.postId, {
        $pull: { likes: decode.id }
      }, {
        new: true
      }).populate("postedBy", "_id name photo").exec();
      console.log("resluts of like page      "+result)
      res.json(result);
})
