import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

mongoose.connect("mongodb://127.0.0.1:27017").then(()=>{
    console.log("Database is Connected ")
}).catch((err)=>{
    console.log(err);
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})