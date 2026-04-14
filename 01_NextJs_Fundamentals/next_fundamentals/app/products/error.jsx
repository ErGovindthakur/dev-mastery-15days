"use client"

import React from 'react'

const Error = ({error,reset}) => {
  return (
    <div>
     <p>Something went wrong : {error.message}</p>
     <button className='bg-blue-500 text-white rounded-md outline-none' onClick={()=>reset()}>Try again</button>
    </div>
  )
}

export default Error