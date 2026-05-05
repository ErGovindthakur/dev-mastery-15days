import { UserModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { catchAsyncErrors } from "../middleware/errorMiddleware.js";

// REGISTER
export const register = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(403).json({ success: false, message: "All fields required" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ success: false, message: "User exists, kindly login" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await UserModel.create({ name, email, password: hashedPassword });

    res.status(201).json({
        success: true,
        message: "User registered successfully...",
    });
});

// LOGIN
export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(403).json({ success: false, message: "All fields required" });
    }

    const user = await UserModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            success: true,
            message: "User loggedIn successfully...",
            data: user.name,
        });
    }

    return res.status(400).json({ success: false, message: "Invalid credentials..." });
});

// LOGOUT
export const logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
    res.status(200).json({ success: true, message: "user loggedOut successfully..." });
});
