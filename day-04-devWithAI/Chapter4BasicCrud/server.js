import app from "./src/app.js";
import connectDb from "./src/config/db.js";

const port = process.env.PORT || 5050;

const startServer = async () => {
    try {
        // 1. Connect to Database first
        await connectDb();
        // 2. Start the server only after DB is ready
        app.listen(port, () => {
            console.log(`🚀 Server is running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error("💥 Failed to start application:", error.message);
        process.exit(1);
    }
};

startServer();
