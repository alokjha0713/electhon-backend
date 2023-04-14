const express=require('express');
const { addDocument } = require('../controllers/DocumentController');
const router=express.Router();

router.route("/upload/:id").post(addDocument)

module.exports=router