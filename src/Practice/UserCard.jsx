import React, { useState } from 'react'
import img from './asset/Picture1.png'
import './UserCard.css'
const UserCard = () => {
    const [userData,setUserData]=useState({
        name:'Nimra',
        profession:'Software Engineer',
        img:img
    })
  return (
    <>
    <div className='main-div'>
        <div className='img'>
            <img src={userData.img} alt={userData.name} />
        </div>
        <div className='sec-div'>
            <div className='sec-text'>
                <h1 style={{fontWeight: 'bold',paddingLeft: '35px',fontSize:'20px'}}>{userData.name}</h1>
                <h2 style={{fontWeight: '200', color:'black',opacity:'70%',fontSize:'16px'}}>{userData.profession}</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default UserCard