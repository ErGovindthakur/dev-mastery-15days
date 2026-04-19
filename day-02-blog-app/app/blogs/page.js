import React from "react";
import BlogCard from "../components/BlogCard";

const BlogPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Blogs...");
  }

  const blogs = await res.json();

  if (blogs.length === 0)
    return <h1 className="text-white">There is no blog</h1>;
  return (
    <div className="p-6 grid  md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogPage;
