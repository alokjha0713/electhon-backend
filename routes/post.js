const express=require('express')
const { createPost } = require('../controllers/PostController')
const router=express.Router()


router.route("/createPost/:token").post(createPost)

module.exports=router