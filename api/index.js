import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
const app = express();
app.use(express.json());
dotenv.config();

mongoose.connect("mongodb://127.0.0.1:27017/Real-Estate").then(()=>{
    console.log("Database is Connected ")
}).catch((err)=>{
    console.log(err);
})







app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})


app.use("/api/user",userRoute);
app.use("/api/auth",authRouter);

app.use((err,req,res,next)=>{  //creating a middleware
       const statusCode = err.statusCode || 500;
       const message = err.message || 'Internal Server Error';
       return res.status(statusCode).json({
        success:false,
        statusCode,
        message
       })
});