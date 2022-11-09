import express from "express";
import { getallUsers, Login, Signup } from "../Controllers/UserController.js";

const router = express.Router();

router.get("/",getallUsers);
router.post("/signup",Signup)
router.post("/login",Login)


export default router;