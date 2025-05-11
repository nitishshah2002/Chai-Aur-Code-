
import './App.css'
import { useState } from "react";

function App() {

  let [counter,setCounter]=useState(0)
    // let counter = 5;
    

    const increment =()=>{
      if(counter<20){
        setCounter(counter+1)
      }
    }
    const decrement =()=>{
      if(counter>0){
        setCounter(counter-1)
      }
    }

  return (
    <>
      <h1>Chai Aur Code</h1>
      <h2>Counter Value : {counter}</h2>

      <button 
      onClick={increment}>Increment</button> <br />

      <button
      onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
