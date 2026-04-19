"use client"

const Error = ({error,reset}) => {
     return(
          <>
          <p className="text-red-700">Error -: {error.message}</p>
          </>
     )
}

export default Error