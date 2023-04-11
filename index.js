const express=require('express')
const app=express();
require('dotenv').config()
const connectWithDb=require('./config/db')
const cookieParser=require('cookie-parser')
const cors=require('cors')
app.use(express.json())

app.use(cookieParser())

app.use(cors())
connectWithDb()

app.listen(8003,()=>{
    console.log("Server is running on PORT 8003")
})

const user=require('./routes/user')
const area=require('./routes/area');
const slot=require('./routes/slot')
const travel1=require('./routes/travel')

app.use("/api/user",user)
app.use("/api/area",area)
app.use("/api/slot",slot)
app.use("/api/travel",travel1)