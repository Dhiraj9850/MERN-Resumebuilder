import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
       type:String,
       required:true,
       unique:true
    },
    password:{
       type:String,
       required:true,
       minlength:8
    },
    resumes:[{type:mongoose.Types.ObjectId,ref:"Resume",required:true}]
})

export default mongoose.model("User",UserSchema)