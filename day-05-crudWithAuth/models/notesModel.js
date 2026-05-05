import mongoose from "mongoose";

//The most important part here is the user field. It creates a relationship between a note and a specific user.

const notesSchema = new mongoose.Schema({
     user:{
          type:mongoose.Schema.Types.ObjectId,
          required:true,
          ref:"User"
     },
     title:{
          type:String,
          required:[true,"Please add a title"]
     },
     description:{
          type:String,
          required:[true,"Please add a description"]
     }
},{timestamps:true});

export const notesModel = mongoose.model("Note",notesSchema)