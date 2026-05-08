import jwt from "jsonwebtoken";
import { User } from "../models/userModels.js";

export const authenticatedUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send("Unauthorized User");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
     console.log("Error from authMiddleware ", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
