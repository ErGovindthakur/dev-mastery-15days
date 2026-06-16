
const UserProfile = (props) => {
     const {name,email,isOnline} = props;
  return (
    <div className={`${isOnline ?"bg-green-500 text-white fond-bold" : "bg-red-500 text-white fond-bold"} w-[180px] px-3 py-2 rounded-md`}>
    <p>Name : {name}</p>
    <p>Email : {email}</p>
    <p>isOnline : {isOnline}</p>
    </div>
  )
}

export default UserProfile