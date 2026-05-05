import { UserModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists, kindly login",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid user data...",
      });
    }

    return res.status(201).json({
      success: true,
      message: "User registered successfully...",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await UserModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // generate token

      const token = await jwt.sign(
        { id: user._id }, // payload
        process.env.JWT_SECRET_KEY, // secret key
        { expiresIn: "7d" }, // options
      );

      // set token in cookie secure way
      res.cookie("token", token, {
        httpOnly: true, // Frontend JS cannot read this
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
      });

      return res.status(200).json({
        success: true,
        message: "User loggedIn successfully...",
        data: user.name,
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials..." });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    // for logout we simply clear the cookie
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return res
      .status(200)
      .json({ success: true, message: "user loggedOut successfully..." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
