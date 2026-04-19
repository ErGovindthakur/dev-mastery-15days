import { ConnectDB } from "@/app/lib/db";
import Blog from "@/app/models/Blog";

export const GET = async(req,{params}) => {

     const {slug} = await params;

     await ConnectDB();

     const blog = await Blog.findOne({slug});

     if(!blog){
          return Response.json({error:"Blog not found"},{status:404})
     };

     return Response.json(blog);
}