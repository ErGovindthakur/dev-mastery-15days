import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     name:{
          type:String,
          required:[true,"name is required"]
     },
     email:{
          type:String,
          required:[true,"email is required"],
          lowercase:true,
          unique:true
     },
     password:{
          type:String,
          required:[true,"password is required"],
          trim:true,
          minLength:[6,"password must be 6 chars long  "]
     }
},{timestamps:true});

export const User = mongoose.model("User",userSchema);