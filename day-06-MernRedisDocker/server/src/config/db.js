import mongoose from "mongoose";

export const connectDb = async() => {
     try {
          const conn = await mongoose.connect(process.env.MONGO_URI);
          console.log(`Db connected : ${conn.connection.host}`);
     } catch (error) {
          console.log("Error from db : ",error.message);
          process.exit(1);
     }
}