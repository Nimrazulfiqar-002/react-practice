//Create a simple useCounter hook with count, increment, and reset
import React, { useState } from 'react'

const UseCounter = (initialValue=0) => {
    const[count,setCount]=useState(initialValue);

    const Increment=()=>{
        setCount(prev=>prev+1);
        console.log(count)
    }
     const Decrement=()=>{
        setCount(prev=>prev-1);
    }
    
      const Reset=()=>{
        setCount(initialValue);
    }
  return {
    count,
    Increment,
    Decrement,
    Reset,
  };
}

export default UseCounter