import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Redis } from "ioredis";
import axios from "axios";
import cookieParser from "cookie-parser";
import { TodoRoute } from "./routes/todoRoutes.js";
import { UserRoute } from "./routes/userRoutes.js";

const app = new express();
dotenv.config();

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

// applying all the middlewares
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
// accepts raw json data
app.use(express.urlencoded({ extended: true }));
//accepts formData
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
// Test api
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running...",
  });
});

app.get("/posts", async (req, res) => {
  try {
    const cachedData = await redisClient.get("posts");

    if (cachedData !== null) {
      console.log("Cached data");
      return res.status(200).json(JSON.parse(cachedData));
    } else {
      console.log("No cached Data");
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/posts",
      );

      await redisClient.set("posts", JSON.stringify(data), "EX", 10);

      return res.status(200).json(data);
    }
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
});
app.use("/api/v1/todo", TodoRoute);
app.use("/api/v1/user", UserRoute);

export default app;
