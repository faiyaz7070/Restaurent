const express=require("express")
const Model=require("../models/user.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {authentication}=require("../middleware/middleware")
const router=express.Router()


router.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body
    try {
        const user= await Model.findOne({email})
        if(user){
            return res.status(401).json({massage:"user already exist please log in"})
        }
        const hashpassword=await bcrypt.hash(password,10);
        const newuser=new Model({name,email,password:hashpassword})
        await newuser.save()
        res.status(201).json({massage:"new user added succesful"})

    } catch (error) {
        console.log(error);
        res.status(500).json({massage:"internal error"})
    }

})
router.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await Model.findOne({email})
        if(!user){
            return res.status(401).json({massage:"invalid username"})
        }
        const ispassword=await bcrypt.compare(password,user.password)
        if(!ispassword){
        return res.status(401).json({massage:"invalid password"})
        }
        const token=jwt.sign({email:user.email},"sajju")
        res.status(201).json({massage:"user log in successful",token:token})
    } catch (error) {
        console.log(error);
        res.status(500).json({massage:"interna error"})
    }
})
router.get("/check",authentication,async(req,res)=>{
    try {
       res.status(200).json({massage:"workk;klkfhfklkjhljnkj;klkjl.jgv"}) 
    } catch (error) {
        console.log(error);
    }
})

module.exports=router