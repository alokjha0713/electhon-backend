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

app.listen(4000,()=>{
    console.log("Server is running on PORT 4000")
})

const user=require('./routes/user')
const area=require('./routes/area');
const slot=require('./routes/slot')
const travel1=require('./routes/travel')
const post=require('./routes/post')
const document=require('./routes/document')

app.use("/api/user",user)
app.use("/api/area",area)
app.use("/api/slot",slot)
app.use("/api/travel",travel1)
app.use("/api/post",post)
app.use("/api/document",document)