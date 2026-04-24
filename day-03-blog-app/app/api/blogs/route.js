import { connectDb } from "@/lib/db";
import { createBlog, getBlogs } from "@/controllers/blog.controller";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDb();
    const blogs = await getBlogs();
    return NextResponse.json({ success: true, data: blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
};

export const POST = async (req) => {
  try {
    await connectDb();
    const contentType = req.headers.get("content-type");
    let body;

    // Handle Form-encoded data (what you're using in Postman)
    if (
      contentType &&
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      const formData = await req.formData();
      body = Object.fromEntries(formData);
    }
    // Handle standard JSON
    else {
      body = await req.json();
    }
    const blog = await createBlog(body);
    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
};
