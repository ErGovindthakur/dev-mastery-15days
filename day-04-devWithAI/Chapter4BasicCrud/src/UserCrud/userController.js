import { UserModel } from "./userModel.js";

export const createUser = async(req,res) => {
     try{
          const {name,age,skills,isActive} = req.body;

          const user = await UserModel.create({name,age,skills,isActive})

          return res.status(201).json({success:true,message:"user created successfully...",data:user})
     }catch(err){
          return res.status(500).json({success:false,message:err.message})
     }
}

export const getAllUser = async(req,res) => {
     
     try {
          const user = await UserModel.find();
          if(user.length===0){
               return res.status(404).json({success:false,message:"No user found"});
          }

          return res.status(200).json({success:true,data:user})
     } catch (err) {
          return res.status(500).json({success:false,message:err.message})
     }
}
export const getSingleUser = async(req,res) => {
     console.log(req.query)
     try {
          const {name} = req.query;
          const user = await UserModel.findOne({name});
          if(!user){
               return res.status(404).json({success:false,message:"No user found"});
          }

          return res.status(200).json({success:true,data:user})
     } catch (err) {
          return res.status(500).json({success:false,message:err.message})
     }
}

export const updateUser = async(req,res) => {
     try {
          const data = req.body;
          const {name} = req.query;
          const updateUser = await UserModel.updateOne({name:name},data,{new:true});

          if(!updateUser){
               return res.status(404).json({success:false,message:"No user found"});
          }

          return res.status(200).json({success:true,message:"User Updated Successfully...",data:updateUser})
     } catch (err) {
          return res.status(500).json({success:false,message:err.message})
     }
}

export const deleteUser = async(req,res) => {
     try {
          const {name} = req.query;
          const deletedUser = await UserModel.deleteOne({name:name})

          if(!deleteUser){
                return res.status(404).json({success:false,message:"No user found"});
          }
          return res.status(200).json({success:true,message:'user deleted successfully...'})
     } catch (err) {
          return res.status(500).json({success:false,message:err.message}) 
     }
}