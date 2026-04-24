import Blog from "@/models/Blog";

// 1. Get all blogs sorted by newest first
export const getBlogs = async() => {
     return await Blog.find().sort({createdAt:-1}).lean();
}

// 2. Get a single blog by ID
export const getBlogById = async(id) => {
     return await Blog.findById(id).lean();
}

// 3. Create a new blog post
export const createBlog = async(data) => {
     return await Blog.create(data);
}

// 4. Update blog and return the NEW version while validating inputs
export const updateBlog = async(id,data) => {
     return await Blog.findByIdAndUpdate(id,data,{
          new:true,
          //Crucial: returns the updated version, not the old one
          runValidators:true // Ensures the update follows your Schema rules
     })
}

// 5. Delete a blog
export const deleteBlog = async(id) => {
     return await Blog.findByIdAndDelete(id);
}