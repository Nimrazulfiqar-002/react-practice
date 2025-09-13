// 4️⃣ Fetch & Display Product Data
// 📌 Task: Fetch a list of products from an API and display them.
// ✅ Requirements:
// •	Use useEffect to fetch data on component mount.
// •	Show a loading message while fetching.
// •	Display the product name, price, and image.


import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data,setData]=useState([])
    // const [loading,setLoading]=useState('....')
useEffect(()=>{
    setTimeout(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(pr => {
        setData(pr);})
    },3000) 
},[]);

  return (
    <>
    <div>FetchData</div>
    { data.length >0 ?
    data.map((m)=>(
        <div key={m.id}>
        <h4>{m.title}</h4>
        <p>$ {m.price}</p>
        <img src={m.image} alt="" width={80} />
    </div>
    )) :
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200"><circle fill="#7d7a8dff"stroke="7d7a8dff" stroke-width="5" r="5" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="7d7a8dff" stroke="7d7a8dff" stroke-width="5" r="5" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="7d7a8dff" stroke="7d7a8dff" stroke-width="5" r="5" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
    </div>
}
    </>
    
  )
}

export default FetchData