import { createContext, useState } from "react";
export const authContext= createContext('')

export const ProvideContext=({children})=>{
    const[data,setData]=useState({
        name:'',
        password:''
    })
const [isLogedIn,setIsLogedIn]=useState(false)


const value={
    data,
    isLogedIn,
    setIsLogedIn,
    setData
}
return(
    <authContext.Provider value={value}>
        {children}
    </authContext.Provider>
);
}