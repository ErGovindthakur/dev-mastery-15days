import mongoose from "mongoose";

let isConnected = false;

export const ConnectDB = async () => {
  try {
    if (isConnected) {
      return;
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "BlogDB",
    });

    isConnected = conn.connections[0].readyState === 1;
    console.log("Db Connected successfully...");
  } catch (error) {
    console.error(`Error from Db -: ${error.message}`);
    throw new Error("DB Failed Error");
  }
};
