import React, { useContext, useState } from 'react'
import { authContext } from './AuthContext'
import Homepage from './Homepage'

const Login = () => {
  const[username,setUsername]=useState('')
  const[userpassword,setUserPassword]=useState('')
  const {data,setIsLogedIn,setData,isLogedIn} =useContext(authContext)

const HandleLogin=(username,userpassword)=>{

if(username==='Nimra' && userpassword ==='nimra123'){
    setIsLogedIn(true)
    setData({ name: username, password: userpassword });
}else{
    setIsLogedIn(false)
    setData({ name: '', password: '' });
}
}

  return (
    <>
      <div>
        <input type="text"
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
        />
        <input type="password" 
        value={userpassword}
         onChange={(e)=>{setUserPassword(e.target.value)}}
        />
        <button
        onClick={()=>{HandleLogin(username,userpassword)}}
        >Login</button>  
        {isLogedIn ? <Homepage /> : <p>Invalid credentials</p>}
      </div>    
    </>
  )
}

export default Login