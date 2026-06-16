import { useState } from "react";
import Input from "./Input";
import Display from "./Display";

const LiftingStateUpParent = () => {
  let [name, setName] = useState("");
  return (
    <div>
      <Input name={name} setName={setName} />
      <Display name={name} />
    </div>
  );
};

export default LiftingStateUpParent;
