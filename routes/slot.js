const express=require('express')
const { getSlot } = require('../controllers/SlotController')
const router=express.Router()

router.route("/getSlot/:area").get(getSlot)

module.exports=router