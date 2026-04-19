import { ConnectDB } from "@/app/lib/db";
import Blog from "@/app/models/Blog";

export const GET = async () => {
  await ConnectDB();

  const blogs = await Blog.find().sort({ createdAt: -1 });

  return Response.json(blogs);
};

// api/blogs/route.js

export const POST = async (req) => {
  await ConnectDB();

  try {
    const contentType = req.headers.get("content-type");
    let body;

    // Handle Form-encoded data (what you're using in Postman)
    if (contentType && contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await req.formData();
      body = Object.fromEntries(formData);
    } 
    // Handle standard JSON
    else {
      body = await req.json();
    }

    const blog = await Blog.create(body);
    return Response.json(blog, { status: 201 });
  } catch (error) {
    // Return the error message so you can see it in Postman
    return Response.json({ error: error.message }, { status: 400 });
  }
};

