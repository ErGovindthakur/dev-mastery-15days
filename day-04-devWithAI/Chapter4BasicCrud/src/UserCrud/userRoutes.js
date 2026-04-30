import express from "express"
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from "./userController.js";

const router = express.Router();

router.post("/createUser",createUser);
router.get("/getAllUsers",getAllUser)
router.get("/getSingleUser",getSingleUser)
router.put("/updateUser",updateUser)
router.delete("/deleteUser",deleteUser)
export const userRouter = router;