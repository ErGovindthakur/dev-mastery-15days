import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
     title:{
          type:String,
          required:[true,"title is required"]
     },
     content:{
          type:String,
          required:true
     },
     createdBy:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"User",
          required:true
     },
     likesCount: { type: Number, default: 0 }
},{timestamps:true});

export const Post = mongoose.model("Post",postSchema)