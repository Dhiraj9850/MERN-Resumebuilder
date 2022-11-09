import express from "express";
import { addResume, deleteResume, getallResumes, getsepecificResume, getUserResumes, updateResume } from "../Controllers/ResumeController.js";
const router = express.Router();

router.get("/",getallResumes);
router.post("/add",addResume);
router.put("/update/:id",updateResume);
router.get("/:id",getsepecificResume);
router.delete("/:id",deleteResume)
//Getting the resumes of specific user
router.get("/user/:id",getUserResumes);

export default router;