import React from 'react'

const LoadingPage = () => {
     const skeletonArr = new Array(8).fill(0);

  return (
    <div>
     {
          skeletonArr.map((_,index)=>(
               <div key={index}>
                    Data is loading...
               </div>
          ))
     }
    </div>
  )
}

export default LoadingPage