const mongoose=require("mongoose")
const schema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},

},{timestamps:true})

const Model=mongoose.model("user",schema)


module.exports=Model