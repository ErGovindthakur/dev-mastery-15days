import { Todo } from "../models/todoModels.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (!title || !description) {
      return res.status(403).send("Title and Description is required...");
    }

    const todoData = await Todo.create({
      title,
      description,
      status,
    });

    return res.status(201).json({
      success: true,
      message: "Todo created...",
      data: todoData.title,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    if (todos.length === 0) {
      return res.status(404).send("Todos are not available, plz create...");
    }

    return res.status(200).json({
      success: true,
      message: "Here is all todos",
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getSingleTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).send("Todos are not available, plz create...");
    }

    return res.status(200).json({
      success: true,
      message: "Here is the todo",
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const UpdateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const updateData = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (status) updateData.status = status;

    const todo = await Todo.findByIdAndUpdate(id, updateData, { new: true });

    if (!todo) {
      return res.status(404).send("Todos are not available, plz create...");
    }

    return res.status(200).json({
      success: true,
      message: "Todo Updated",
      data: todo.title,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).send("Todos are not available");
    }

    return res.status(200).json({
      success: true,
      message: "Todo deleted",
      data: todo.title,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
