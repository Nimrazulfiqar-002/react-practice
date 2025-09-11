import React, { useState } from 'react'

const LoginForm = () => {
    const [userName,setUserName]=useState()
    const [userpass,setUserpass]=useState()

const getValue=(e)=>{
    setUserName(e.target.value);
    console.log(userName, userpass)
}
const getValuepass=(e)=>{
     setUserpass(e.target.value);
    console.log( userpass)
}
const loginHandling=(e)=>{
    e.preventDefault();
if(userName ==='john'&& userpass==='john123'){
    alert('YOU LOGINING TO YOUR ACCOUNT');
}else if (userName===""&& userpass===""){
alert("please enter your info" )
}
else {
    alert('InCorrect Username and Password')
}

}
  return (
    <>
    <h1>loginForm</h1>
    <div>
        <input type="text" 
        value={userName}
        onChange={getValue}
        placeholder='Enter Your User Name'/>
        <input type='password'
        placeholder='Enter Your Password'
        onChange={getValuepass}
        value={userpass}
        />
        <button onClick={loginHandling}>Login</button>
    </div>

    </>
    
  )
}

export default LoginForm