
const Input = ({name,setName}) => {

  return (
    <div>
    <label htmlFor="name">Name</label>
     <input
     id="name"
     type="text"
     name="name"
     value={name}
     onChange={(e)=>setName(e.target.value)}
     />
    </div>
  )
}

export default Input