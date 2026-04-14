import React from 'react'

const SingleProject = async({params}) => {
     const {id} = await params;
     // console.log(`Params -: ${id}`)
     const singleProject = await fetch(`http://localhost:3000/api/projects/${id}`,{
          cache:"no-cache"
     });
     const data = await singleProject.json();
     // console.log("Data",data)
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col'>
     <p>Title -: {data.title}</p>
     <p>TechStacks -: {data.TechStacks}</p>
    </div>
  )
}

export default SingleProject