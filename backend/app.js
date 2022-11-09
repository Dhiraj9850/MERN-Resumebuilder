import express from "express";
import mongoose from "mongoose";
import users from './Routes/users.js';
import resume from './Routes/resume.js';
import cors from 'cors';
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = 8000;

const connect =async()=>{
    try {
        await mongoose.connect(process.env.Mongo_URI);
        console.log("connected to db");
    } catch (error) {
        throw(error);
    }
}
//middlewares
app.use(cors());
app.use(express.json());
app.use('/api/users',users);
app.use('/api/resume',resume);



app.listen(port,()=>{
    connect();
    console.log(`server is start on port ${port}`);
})