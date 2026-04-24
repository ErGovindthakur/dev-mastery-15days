import mongoose from "mongoose";

// 1. Define the structure of your data
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required..."], // Ensures field isn't empty; custom msg for frontend
      trim: true, // " Hello " becomes "Hello" (prevents empty space bugs)
      maxlength: [100, "Title can not be more than 100 characters..."], // Database-level validation for UI consistency
    },
    content: {
      type: String,
      required: [true, "content is required..."],
    },
    status: {
      type: String,
      enum: {
        values: ["pending", "in-progress", "read"], // Restricts input to only these 3 options
        message: `{VALUE} is not a valid status`, // {VALUE} automatically injects the wrong string used
      },
      default: "pending", // Sets initial state so you don't have to provide it every time
      index: true, // Optimized for performance when searching for "pending" blogs
    },
  },
  { 
    // 2. Automatically adds createdAt and updatedAt fields
    timestamps: true 
  }
);

/**
 * 3. The "Next.js Fix"
 * mongoose.models.Blog checks if the model already exists in the "memory bank."
 * If not, mongoose.model("Blog", blogSchema) creates it.
 * This prevents the "Cannot overwrite model once compiled" error during hot reloads.
 */
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
