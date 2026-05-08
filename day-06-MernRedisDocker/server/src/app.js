import express from "express";
import dotenv from "dotenv";

const app = new express();
dotenv.config();

app.get("/",(req,res)=>{
     res.status(200).json({
          success:true,
          message:"Server is running..."
     })
})

export default app;