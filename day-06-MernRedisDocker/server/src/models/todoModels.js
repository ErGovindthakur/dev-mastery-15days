import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
     title:{
          type:String,
          required:[true,"title is required"],
          trim:true
     },
     description:{
          type:String,
          required:[true,"description is required"],
          trim:true
     },
     status:{
          type:String,
          enum:["pending","in-progress","completed"],
          default:"pending"
     }
},{timestamps:true});

export const Todo = mongoose.model("Todo",todoSchema);

