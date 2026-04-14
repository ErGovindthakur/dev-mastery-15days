import Link from 'next/link';
import React from 'react'

const ProjectPage = async() => {
     const res = await fetch("http://localhost:3000/api/projects",{
          cache:"no-store"
     })

     if(!res.ok){
          throw new Error("Failed to Fetch Projects...")
     }

     const projectData = await res.json();

     // console.log(projectData);

  return (
   <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-900'>
  {projectData.map((data) => (
    <Link key={data.id} href={`/projects/${data.id}`} className="block">
      <div className='h-full rounded-lg bg-gray-800 text-white shadow-lg p-6 hover:scale-[1.02] transition-transform cursor-pointer border border-gray-700'>
        <p className="font-bold text-xl mb-2">
          Title: {data.title}
        </p>
        <p className="text-gray-400">
          <span className="text-amber-400 font-semibold">Tech Stacks:</span> {data.TechStacks}
        </p>
      </div>
    </Link>
  ))}
</div>
  )
}

export default ProjectPage