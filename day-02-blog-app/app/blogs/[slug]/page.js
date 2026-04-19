import React from 'react'

const BlogPage = async({params}) => {
     const {slug} = await params;
     console.log(slug)
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${slug}`,{cache:"no-store"})

     if(!res.ok){
          throw new Error("Blog not found")
     }

     const blog = await res.json();

  return (
    <div className='p-6 to-white'>
     <h1 className='text-2xl font-bold'>{blog.title}</h1>
     <p className='mt-4'>{blog.content}</p>
    </div>
  )
}

export default BlogPage