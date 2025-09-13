// 3️⃣ Create a Product Quantity Selector
// 📌 Task: Build a quantity selector for an e-commerce product page.
// ✅ Requirements:
// •	Use useState to manage product quantity.
// •	Allow users to increase or decrease the quantity.
// •	Prevent the quantity from going below 1.
import React, { useState } from 'react'

const ProductQuality = () => {
  const[count,setCount]=useState(1)
const IncreaseHandler=()=>{
        setCount(count +1)
}
const DecreaseHandler=()=>{
        setCount(count -1)
        if (count <=1){
          setCount(count)
        }
}
  return (
    <> 
    <div style={{marginTop:'10vw'}}>
        <center>Product Quantity Selector</center>
    <img src="https://rtwcreation.com/cdn/shop/products/brown-mini-bag-back.jpg?v=1643017224" alt="" 
    style={{width:'12vw',height:'12vw', marginLeft:'44vw',marginTop:'2vw'}}
    />
    <div style={{display:'flex',justifyContent:'center',marginTop:'1vw'}}>
        <button onClick={DecreaseHandler}>-</button>
            <p>{count}</p>
        <button onClick={IncreaseHandler}>+</button>
    </div>
    </div>
    
    
    
    </>
  )
}

export default ProductQuality