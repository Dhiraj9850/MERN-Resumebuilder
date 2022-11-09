import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getallUsers = async(req,res,next)=>{

     try {
       const users = await User.find();
        res.status(200).json({users});
     } catch (error) {
        next(error);
     }
 
}

//Signup for user
export const Signup = async(req,res,next)=>{
    const {name,email,password} = req.body;
    let existingUser;
   try {
      existingUser = await User.findOne({email});
       
   } catch (error) {
      next(error);
   }
   if(existingUser){
    return res.status(400).json({message:"User allready exist"})
   }
   const hashpassword = bcrypt.hashSync(password);
   const newuser = new User({
      name,
      email,
      password:hashpassword,
      resumes:[]
   })

   try {
      await newuser.save();
      res.status(200).json(newuser);
   } catch (error) {
     next(error);
   }
}

//Login user

export const Login =async(req,res,next)=>{
    const{email,password} = req.body;

    let existingUser;
    try {
     existingUser = await User.findOne({email})
    
    } catch (error) {
         next(error)
    }
    if(!existingUser){
        return res.status(400).json({message:"User not foud with this email"})
    }
    const isPasswordCorrect =bcrypt.compareSync(password,existingUser.password)
    if(!isPasswordCorrect){
        return res.status(404).json({message:"Incorrect password"})
    }
    return res.status(200).json({message:"Login successfull",user:existingUser})
}