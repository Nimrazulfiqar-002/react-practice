import React, { useContext } from 'react'
import { authContext } from './AuthContext'

const Homepage = () => {
   const {data} =useContext(authContext)
  return (
    <>
    <h1>WELCOME,{data.name}</h1>
    </>
  )
}

export default Homepage