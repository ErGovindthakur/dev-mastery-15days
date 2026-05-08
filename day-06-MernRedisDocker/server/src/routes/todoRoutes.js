import express from "express";
import { createTodo, deleteTodo, getAllTodos, getSingleTodo, UpdateTodo } from "../controllers/todoController.js";
import { authenticatedUser } from "../middleware/authMiddleware.js";

const route = express.Router();

route.post("/createTodo",authenticatedUser,createTodo);
route.get("/getAllTodos",getAllTodos);
route.get("/getSingleTodo/:id",getSingleTodo);
route.put("/updateTodo/:id",authenticatedUser,UpdateTodo);
route.delete("/deleteTodo/:id",authenticatedUser,deleteTodo);


export const TodoRoute = route;