import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     name:{
          type:String,
          required:[true,"name is required"]
     },
     age:Number,
     skills:[String],
     isActive:Boolean,
},{timestamps:true});

export const UserModel = mongoose.model("UserModel",userSchema)