const express=require('express')
const { addArea, getArea } = require('../controllers/ConsituencyController')
const router=express.Router()


router.route("/addArea").post(addArea)
router.route("/getArea/:pincode").get(getArea)

module.exports=router