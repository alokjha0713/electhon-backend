const express=require('express');
const { addTravel } = require('../controllers/TravelController');
const router=express.Router();

router.route("/refund").post(addTravel)

module.exports=router