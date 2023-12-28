const express=require("express")
const bodyparser=require("body-parser")
const connection=require("./config/db")
const userrouter=require("./routes/user.route")
const app=express()
require("dotenv").config()

app.use(bodyparser.json())

app.use(userrouter)



app.get("/",(req,res)=>{
res.status(200).json({massage:"this is home page"})
})
const PORT=process.env.PORT||4500
app.listen(PORT,async()=>{
try {
    await connection
    console.log("connected to db");
} catch (error) {
    console.log(error);
}

console.log(`server is running on ${PORT}`);
})