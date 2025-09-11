import React, { useEffect, useState } from 'react'

const FetchUser = () => {
const[data,setData]=useState([])

useEffect(()=>{
    setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((res)=>setData(res))
}, 2000);  
},[])

  return (
    <>
    <h1 className='flex items-center'>FetchUse</h1>

   {data.length>0 ?
   data.map((n)=>{
return(
    <div key={n.id}>        
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {n.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {n.email}
                        </p>
                    </div>
                </div>
            </li>
        </ul>

    </div>
   )}) :<div><p>Loading...</p></div>
}
    </>
  )
}

export default FetchUser