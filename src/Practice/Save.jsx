//  Auto-Save User Input (Debouncing)
// 📌 Task: Create an auto-saving text editor that saves the text after 2 seconds of inactivity.
// ✅ Requirements:
// •	Use useState to manage the text input.
// •	Use useEffect to auto-save when the user stops typing.
// •	Implement debouncing using setTimeout()

//debouncing huta hai jb input m kuch lekh liya jae us k bd api call hu ,react m jb jb input m lekhe gy har word pr api call hugi ,is ko prevent krne k liye debouncing krte hain

import React, { useEffect, useState } from 'react'

const Save = () => {
    const[text,setText]=useState('')
    const[saveText,setSaveText]=useState('')

    const ChangeHandler=(e)=>{
       setText(e.target.value.trim())  
    }
useEffect(()=>{
        const hand=setTimeout(()=>{
            setSaveText(text)
        },2000)

        return () => {
            clearTimeout(hand);
        };
},[text])
  return (
    <>
    <h1>Save</h1>
    <div>
        <textarea type="text" 
        onChange={ChangeHandler}
        value={text}
        />
        <h1>{saveText}</h1>
    </div>
    </>
  )
}

export default Save