import React, { useState } from "react";
import Button from "./Button";
import Header from "./Header";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handelIncrement = (e: number) => {
    let newCounter = counter + e;
    setCounter(newCounter);
  };
  const handelDecrement = (e: number) => {
    let newCounter = counter - e;
    setCounter(newCounter);
  };
  return (
    <div>
      <Header label="Counter"/>
      <Header label={`${counter}`} />
      <div style={{display:"flex",justifyContent:"center"}}>
        <Button label="Increment" handelFunction={() => handelIncrement(1)} />
        <Button label="Decrement" handelFunction={() => handelDecrement(1)} />
      </div>
    </div>
  );
};

export default Counter;
