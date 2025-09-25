import React, { useState,useEffect } from 'react'
import UseCounter from './UseCounter';
import UseInput from './UseInput';

const Displayhook = () => {
const { count, Increment, Decrement, Reset } = UseCounter(0);
const { userData, ChangeHandler } = UseInput({
    firstname: '',
    lastname: ''
  });
 const suggestionName=(userData)=>{
    const suggestion=[]
    if(userData.firstname.includes('nim')){
        suggestion.push('nimra')
    }
    return suggestion;
 }
 const [suggestions, setSuggestions] = useState([]);

useEffect(() => {
  const aiSuggestions = suggestionName(userData);
  setSuggestions(aiSuggestions);
}, [userData.firstname]);


  return (
    <>
    <div>
      <h1>use counter custom hook</h1>
      <p>count:{count}</p>
      <button  onClick={Increment}>+</button>
      <button  onClick={Decrement}>-</button>
      <button  onClick={Reset}>Reset</button>
    </div>
    <div>
        <hr />
        <input type="text"
       name="firstname" 
          value={userData.firstname}
          onChange={ChangeHandler}
        placeholder='enter your firstname' />
         <div style={{backgroundColor:'lightBlue',marginTop:'6px',padding:'4px',borderRadius:'8px',width:'15%'}}>
                <h3 className="font-semibold">🧠 Smart Suggestions</h3>
                <p>{suggestions}</p>
        </div>
        <p>First Name: {userData.firstname}</p>

        <input type="text"
         name="lastname" 
          value={userData.lastname}
          onChange={ChangeHandler} // Add onChange handler
        placeholder='enter your lastname'/>
        <p>Last Name: {userData.lastname}</p>
    </div>
    </>
  )
}

export default Displayhook