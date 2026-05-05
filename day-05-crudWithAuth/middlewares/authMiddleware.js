import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({
        success: false,
        message: "User not authorized, token not found",
      });
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    // 3. Find the user by ID from the token and attach them to the 'req' object
    // We exclude the password for security

    req.user = await UserModel.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    console.log("Error from auth middleware : ", error);
    return res
      .status(401)
      .json({ success: false, message: "User not authorized, token failed" });
  }
};
