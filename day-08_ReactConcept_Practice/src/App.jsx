import LiftingStateUpParent from "./components/LiftingStateUpParent"
import UseRefHook from "./components/UseRefHook"
import UserProfile from "./components/UserProfile"

const App = () => {
  return (
    <div className="flex justify-center gap-3 mt-5">
      <UserProfile name={"Ram"} email={"ram@123"} isOnline={true} />
      <UserProfile name={"Ron"} email={"ron@123"} isOnline={false}/>
      <UserProfile name={"Ringo"} email={"ringo@123"} isOnline={true}/>
      <LiftingStateUpParent />
      <UseRefHook />
    </div>
  )
}

export default App