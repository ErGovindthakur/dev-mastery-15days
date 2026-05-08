import express from "express";
import { createTodo, deleteTodo, getAllTodos, getSingleTodo, UpdateTodo } from "../controllers/todoController.js";

const route = express.Router();

route.post("/createTodo",createTodo);
route.get("/getAllTodos",getAllTodos);
route.get("/getSingleTodo/:id",getSingleTodo);
route.put("/updateTodo/:id",UpdateTodo);
route.delete("/deleteTodo/:id",deleteTodo);


export const TodoRouter = route;