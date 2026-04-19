"use client"
import React from 'react'

// Next.js error components receive 'error' (the object) and 'reset' (a function)
const Error = ({ error, reset }) => {
  return (
    <div className='text-center mt-10 text-white'>
      {/* Use error.message to show the text "Failed to fetch Blogs..." */}
      Something went wrong -: {error.message || "An unknown error occurred"}
      <br />
      <button 
        onClick={() => reset()} 
        className="mt-4 p-2 bg-blue-500 rounded"
      >
        Try Again
      </button>
    </div>
  )
}

export default Error
