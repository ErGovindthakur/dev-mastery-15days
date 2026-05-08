import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     name:{
          type:String,
          required:[true,"name is required"],
          trim:true
     },
     email:{
          type:String,
          required:[true,"email is required"],
          unique:true,
          lowercase:true,
          trim:true
     },
     password:{
          type:String,
          required:[true,"password is required"],
          minLength:[6,"Password must be at least 6 characters long"]
     }
},{timestamps:true});


userSchema.pre("save",async function(next){
     if(!this.isModified("password")) return;

     const salt = await bcrypt.genSalt(10);
     this.password = await bcrypt.hash(this.password,salt);
     
})
export const User = mongoose.model("User",userSchema);