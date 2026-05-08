import express from "express";
import dotenv from "dotenv";
import { TodoRouter } from "./routes/todoRoutes.js";

const app = new express();
dotenv.config();

// applying all the middlewares
app.use(express.json({limit:'16kb'}));
// accepts raw json data
app.use(express.urlencoded({extended:true}));
//accepts formData

app.get("/",(req,res)=>{
     res.status(200).json({
          success:true,
          message:"Server is running..."
     })
})

app.use("/api/v1/todo",TodoRouter);

export default app;