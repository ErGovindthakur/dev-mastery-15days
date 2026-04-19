import Link from 'next/link'
import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
     <div className='p-4 bg-gray-800 text-white  rounded-md hover:scale-105 transition'>
          <h2 className='text-lg font-bold'>{blog.title}</h2>
          <p className='text-sm text-gray-400 mt-2'>{blog.content.slice(0,80)}...</p>
     </div>
    </Link>
  )
}

export default BlogCard