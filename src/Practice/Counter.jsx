import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(null)

    const CountHandling=()=>{
       setCount( count +1);
    }
    const DeCountHandling=()=>{
       setCount( count -1);
    }
  return (
    <>
    <div>Counter</div>
    <div>
        <h1>{count}</h1>
        <button onClick={CountHandling}>Increase</button>
        <button onClick={DeCountHandling}>Decrease</button>
        </div>
    </>
    
  )
}

export default Counter