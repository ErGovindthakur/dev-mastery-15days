import mongoose from "mongoose";

const connectDb = async () => {
    try {
        // ADD 'await' HERE: This ensures the function waits for the connection
        await mongoose.connect(process.env.MONGO_URI);

        // Keep listeners for ongoing monitoring (optional but good)
        mongoose.connection.on('connected', () => console.log("Db connected successfully..."));
        mongoose.connection.on("error", (err) => console.log("Db connection lost:", err.message));

        console.log("✅ Initial connection established.");
    } catch (error) {
        console.error("❌ Db connection error:", error.message);
        process.exit(1); // Stop the server if DB fails
    }
}

export default connectDb;
