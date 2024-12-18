import React from "react";
import { useState } from "react";

const InputUseState = () => {
  const [inputValue, setInputValue] = useState("No Name");

  let onChange = (event) => {
   {/*} const newValue = event.target.value;*/}
    setInputValue( event.target.value);
  };
  return (
    <div>
      <input placeholder="Enter your name" onChange={onChange} />
        {inputValue}
      
    </div>
  );
};

export default InputUseState;
