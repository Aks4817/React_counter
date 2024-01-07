import logo from "./logo.svg";
// import React from 'react';
import { useState } from "react";
import "./App.css";

export default function App() {
  // let count=0;
  const[count, setCount] = useState(0)
  function addClickHandler(){
    setCount(count+1)
  }
  function subtractClickHandler(){
    setCount(count-1)
  }
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#344151]" >
        <div className="text-white text-2xl ">Increment and decrement</div>
        <div className="flex flex-row text-[5rem]  bg-white w-[15%] justify-evenly gap-4">
          <button onClick={subtractClickHandler}>-</button>
          <div>{count}</div>
          <button onClick={addClickHandler}>+</button>
        </div>
      </div>
    </>
  );
}
