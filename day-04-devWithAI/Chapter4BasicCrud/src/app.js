import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./UserCrud/userRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
     res.send("Server is running...")
})

app.use("/api/user",userRouter)
export default app;