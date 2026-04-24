import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define your MONGO_URI in your .env file");
}

/* 
 1.FIX: We check the global object and immediately assign it if empty.
 2. This ensures the 'memory' persists during Next.js Hot Reloads.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDb = async () => {
  // 1. Return existing connection if available
  if (cached.conn) {
    console.log("Using existing mongodb connection...");
    return cached.conn;
  }

  // 2. If no connection is in progress, start one
  if (!cached.promise) {
    console.log("Establishing new db connection...");

    const opts = {
      dbName: "blogApp",
      bufferCommands: false, // Don't queue commands if connection is down
    };

    cached.promise = mongoose
      .connect(MONGO_URI, opts)
      .then((mongoose) => {
        console.log("✅ Db connected successfully...");
        return mongoose;
      })
      .catch((error) => {
        console.log("❌ Db connection error : ", error);
        cached.promise = null; // Important: Clear promise so we can retry later
        throw error;
      });
  }

  // 3. Wait for the promise to resolve and store the connection
  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  return cached.conn;
};
