const express=require('express')
const { createPost ,postAllData,likePosts,unlikePosts,makeComments} = require('../controllers/PostController')
const router=express.Router()


router.route("/createPost/:token").post(createPost)
router.route("/allposts/:token").get(postAllData)
router.route("/likes/:token").put(likePosts)
router.route("/unlike/:token").put(unlikePosts)
router.route("/makecomments/:token").put(makeComments)
module.exports=router