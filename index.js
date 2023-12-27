const express = require("express")
const mongoose  =require("mongoose")
const app = express();
const user = require("./models/Customer.schema");
const Userrouter = require("./Routes/AdminRoutes");
app.use(express.json())
const cors = require("cors")
require("dotenv").config()
app.listen(3001)
app.use(cors({
    origin:'*'
}))

app.use("/user" ,  Userrouter)

app.get("/" , (req , res)=>{
    res.json({"Meesage":"Hello"})
})

mongoose.connect(process.env.MONGODB_STRING).then(()=>{
    console.log("Connected")
}).catch(err=>{
    console.log(err)
})
