import { connectDb } from "@/lib/db";
import { getBlogById, updateBlog, deleteBlog } from "@/controllers/blog.controller";
import { NextResponse } from "next/server";


// 1. getSingle blog by id
export const GET = async(_, {params}) => {
     try {
          await connectDb();
          const {id} = await params;
          const blog = await getBlogById(id);

          if(!blog){
               return NextResponse.json({success:false,error:"Blog not found"},{status:404});
          }

          return NextResponse.json({success:true,data:blog},{status:200})
     } catch (error) {
          return NextResponse.json({success:false,error:error.message},{status:400});
     }
}


export const PUT = async (req, { params }) => {
  try {
    await connectDb();
    const { id } = await params;
    
    // 1. Detect Content-Type
    const contentType = req.headers.get("content-type") || "";
    let body;

    // 2. Parse based on type
    if (contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await req.formData();
      body = Object.fromEntries(formData);
    } else {
      // Default to JSON
      body = await req.json();
    }

    // 3. Perform Update
    const updated = await updateBlog(id, body);

    if (!updated) {
      return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
};

export async function DELETE(_, { params }) {
  try {
    const { id } = await params; // ✅ MUST await params
    const deleted = await deleteBlog(id);
    
    if (!deleted) return NextResponse.json({ message: "Not Found" }, { status: 404 });

    return NextResponse.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
