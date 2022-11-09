import mongoose from "mongoose";
import Resume from "../models/Resume.js";
import User from "../models/User.js";


export const getallResumes = async (req, res, next) => {
    let allresumes;
    try {
        allresumes = await Resume.find().populate('user');
        return res.status(200).json({ allresumes })
    } catch (error) {
        next(error);
    }
    if (!allresumes) {
        return res.status(404).json({ message: "No Resumes found" })
    }
}

export const addResume = async(req,res,next) => {
    const {user, studentname,gender,email,mobilenumber,address,projectname,projectdesc, Education,graduationstartyear,graduationendyear,worktitle,workdesc,skills,certifications,linkdin,facebook,fathername,sscschool,hsccollege,graduationcollege,sscpassingDate,hscpassingDate,graduationpassingDate,sscPercentage,hscPercentage,graduationPercentage} = req.body

    let existingUser;
    try {
        existingUser = await User.findById(user);
        
    } catch (error) {
        next(error);
    }
    if(!existingUser){
        return res.status(404).json({message:"unable to find user with this id"})
    }
    const newResume = new Resume({
        studentname,gender,email,mobilenumber,address,projectname,projectdesc, Education,graduationstartyear,graduationendyear,worktitle,workdesc,skills,certifications,linkdin,facebook,fathername,sscschool,hsccollege,graduationcollege,sscpassingDate,hscpassingDate,graduationpassingDate,sscPercentage,hscPercentage,graduationPercentage,user
    });

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await newResume.save({session});
        existingUser.resumes.push(newResume)
        await existingUser.save({session})
        await session.commitTransaction();
        return res.status(200).json({newResume});
    } catch (error) {
        next(error);
    }
    
}

export const updateResume =async(req,res,next)=>{
  const {email,mobilenumber,worktitle,workdesc,skills} = req.body;
  const resumeId = req.params.id;
 
   try {
      const updatedResume = await Resume.findByIdAndUpdate(resumeId,{
          email,
          mobilenumber,
          worktitle,
          workdesc,
          skills
       })
       return res.status(200).json({updatedResume});
  
   } catch (error) {
      next(error);
   }
   
}

export const getsepecificResume =async(req,res,next)=>{
    const id = req.params.id;
   try {
      const resume = await Resume.findById(id);
      return res.status(200).json({resume})
   } catch (error) {
     next(error);
   }
}

export const deleteResume = async(req,res,next)=>{
    const id = req.params.id;
    let resume;
   try {
     resume = await Resume.findByIdAndRemove(id).populate('user');
     await resume.user.resumes.pull(resume);
     await resume.user.save();
       
   } catch (error) {
     next(error);
   }
   if(!resume){
     return res.status(404).json({message:"unable to delete Resume"})
   }
   return res.status(200).json({message:"Resume deleted Successfully"})  
}

export const getUserResumes = async(req,res,next)=>{
    const userId = req.params.id;
    let userResumes;
    try {
      userResumes = await User.findById(userId).populate("resumes");        
    } catch (error) {
        next(error);
    }
    if(!userResumes){
        return res.status(404).json({message:"unable to find resumes with this id"})
    }
    return res.status(200).json({user:userResumes})
}