import { UserModel } from "../models/userModel.js";

export const createNotes = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description)
    return res.status(400).json({ message: "Please add all fields" });

  // Link note to the logged-in user
  const note = await Note.create({
    user: req.user.id,
    title,
    description,
  });
  res.status(201).json(note);
};

export const getAllNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.status(200).json(notes);
};

export const getSingleNotes = async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) return res.status(404).json({ message: "Note not found" });

  // Check if the note belongs to the user
  if (note.user.toString() !== req.user.id) {
    return res.status(401).json({ message: "Not authorized" });
  }

  res.status(200).json(note);
};

export const UpdateNotes = async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) return res.status(404).json({ message: "Note not found" });

  // Security check: Is this your note?
  if (note.user.toString() !== req.user.id) {
    return res.status(401).json({ message: "User not authorized" });
  }

  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedNote);
};

export const deleteNotes = async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) return res.status(404).json({ message: "Note not found" });

  if (note.user.toString() !== req.user.id) {
    return res.status(401).json({ message: "User not authorized" });
  }

  await note.deleteOne();
  res.status(200).json({ id: req.params.id, message: "Note removed" });
};
