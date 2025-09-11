// import {createContext} from 'react'
// export const ThemeContext= createContext('Light')

import { createContext, useState } from "react";
export const themeContext=createContext();

export const ThemeProvider=({children})=>{
    const[theme,setTheme]=useState('Light');
    const ToggleHandler=()=>{
        setTheme(theme ==='light'? 'dark': 'light')
    }
return(
    <themeContext.Provider value={{theme,ToggleHandler}} >
        {children}
    </themeContext.Provider>
);
}