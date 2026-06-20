import { useEffect, useRef, useState } from "react"

const UseRefHook = () => {
     const [count,setCount] = useState(0);
     const ref = useRef(0); // example 1

     const inpRef = useRef(); // example 2
     const focusInput = () => {
          inpRef.current.focus();
     }

     const prevCount = useRef();

     useEffect(()=>{
          prevCount.current = count;
     },[count])


  return (
    <div>
     <button onClick={()=>{
          ref.current++;
          console.log(ref.current)
     }}>Ref++</button>
     <p>{count}</p>
     <input
     ref={inpRef}
      />
      <button onClick={focusInput}>Focus</button>

      <p>Count : {count}</p> 
      <p>PrevCount : {prevCount.current}</p>
      <button onClick={()=>setCount(count+1)}>PrevCount++</button>
    </div>
  )
}

export default UseRefHook