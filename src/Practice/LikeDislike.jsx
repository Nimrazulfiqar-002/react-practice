// 2️⃣ Implement a Like & Dislike Feature
// 📌 Task: Create a "Like & Dislike" system for a blog post.
// ✅ Requirements:
// •	Use useState to manage like and dislike counts.
// •	Prevent users from liking and disliking at the same time.
// •	Display the total number of likes and dislikes.

import React, { useState } from 'react'
import img from './asset/518dc0f6-93b6-445e-bdeb-1946d536403b-removebg-preview.png'

const LikeDislike = () => {
    const[likes,setLikes]=useState(0)
    const[dislike,setDislikes]=useState(0)
    const[likeStatus,setLikeStatus]=useState('none')

  const handleLike = () => {
    if (likeStatus === 'none') {
      setLikes(likes + 1);
      setLikeStatus('liked');
    } else if (likeStatus === 'disliked') {
      setDislikes(dislike - 1);
      setLikes(likes + 1);
      setLikeStatus('liked');
    } else if (likeStatus === 'liked') {
      setLikes(likes - 1);
      setLikeStatus('none');
    }
  };

  const handleDislike = () => {
    if (likeStatus === 'none') {
      setDislikes(dislike + 1);
      setLikeStatus('disliked');
    } else if (likeStatus === 'liked') {
      setLikes(likes - 1);
      setDislikes(dislike + 1);
      setLikeStatus('disliked');
    } else if (likeStatus === 'disliked') {
      setDislikes(dislike - 1);
      setLikeStatus('none');
    }
  };
  return (
    <>
    <div style={{
      display:'flex',justifyContent:'center',alignItems:'start',marginTop:'50vh'
    }}>
      <div 
      style={{
        width:'60px',height:'60px',borderRadius:'100px', filter: 'drop-shadow(2px 4px 6px black)',border:'3px white solid'
      }}
      >
         <img src={img} alt="userimg"
         style={{
          width:'100%',height:'100%',borderRadius: '100px',objectFit: 'fill'
        }}
        />
      </div>
        <div 
        style={{
          borderRadius:'10px',border:'1px solid rgba(0, 0, 0, 0.2)',backgroundColor:'white',width:'40vw',height:'20vh',display:'grid',alignItems:'center',paddingLeft:'20px',marginLeft:'15px',paddingBottom:'30px' ,paddingTop:'10px'
          }}>
          <div style={{fontWeight:'800',fontSize:'18px'}}>Sara 
            <span style={{
            color:'white',backgroundColor:'#1E90FF',fontSize:'14px',padding:'5px',borderRadius:'5px',fontWeight:'12',margin:'8px'
            }}>
              Author
              </span> 
          </div>
          <p >Hi There,I've been having an issue with the logs in our system</p>
        </div>
   </div>
    < div style={{display:'flex',justifyContent:'center',marginTop:'2vh',paddingRight:'25vw',alignItems:'center'}} >
        <img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-love-logo-svg-vector.svg" alt="" 
        style={{
          width:'28px',height:'28'
        }}
        onClick={handleLike}
        />
        <h3
        style={{
          margin:'3px'
        }}
        >{likes}</h3>
      
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/dislike-button-icon.png" alt="" 
        style={{
          width:'30px',height:'30px', marginLeft:'15px'
        }}
        onClick={ handleDislike}
        />
        <h3
         style={{
          margin:'3px'
        }}
        >{dislike}</h3>
        </div>
    </>
  )
}

export default LikeDislike

