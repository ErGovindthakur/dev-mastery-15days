import { User } from "../models/userModels.js";
import bcrypt from "bcryptjs";
import { genToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(403).send("All fields are required");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send("User already register, login now");
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    return res
      .status(201)
      .json({ success: true, message: "User registered", data: newUser.name });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("All fields required");

    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Invalid credentials");

    // Generate Token
    const token = await genToken(user._id, process.env.JWT_SECRET_KEY);

    // Set Cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ success: true, message: "Welcome back!", data: user.name });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
     // Clear the cookie by setting it to an empty string and expiring it
     res.cookie('token', '', {
          httpOnly: true,
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
          expires: new Date(0) 
     });

     return res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

