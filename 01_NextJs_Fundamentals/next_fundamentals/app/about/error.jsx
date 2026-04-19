"use client"
import React from 'react'

const Error = ({error,reset}) => {
  return (
    <div>Error -: {error.message}</div>
  )
}

export default Error