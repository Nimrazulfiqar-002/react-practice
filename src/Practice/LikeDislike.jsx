// 2️⃣ Implement a Like & Dislike Feature
// 📌 Task: Create a "Like & Dislike" system for a blog post.
// ✅ Requirements:
// •	Use useState to manage like and dislike counts.
// •	Prevent users from liking and disliking at the same time.
// •	Display the total number of likes and dislikes.

import React, { useState } from 'react'

const LikeDislike = () => {
    const[count,setCount]=useState(0)
    const[dislike,setDislikes]=useState(0)
    const[likeStatus,setLikeStatus]=useState('none')

const LikeHandler=()=>{
    if (likeStatus === 'none') {
      setCount(count + 1);
      setLikeStatus('liked');
    } else if (likeStatus === 'disliked') {
      setDislikes(dislike - 1);
      setCount(count + 1);
      setLikeStatus('liked');
    } else if (likeStatus === 'liked') {
      setCount(count - 1);
      setLikeStatus('none');
    }
    
};
const DisLikeHandler=()=>{
    if(likeStatus==='none'){
        setDislikes(dislike+1)
        setLikeStatus('disliked')
    } else if (likeStatus === 'disliked') {
      setCount(count - 1);
      setDislikes(dislike + 1);
      setLikeStatus('disliked');
    } else if (likeStatus === 'liked') {
      setDislikes(dislike - 1);
      setLikeStatus('none');
    }  
};
  return (
    <>
    <div style={{display:'grid',justifyContent:'center'}}>LikeDislike
    <div style={{display:'flex'}} >
        <img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-love-logo-svg-vector.svg" alt="" 
        style={{width:'28px',height:'28',margin:'5px'}}
        onClick={LikeHandler}
        />
        <h3>{count} Likes</h3>
       
    </div>
    <div style={{display:'flex'}} >
        <img src="https://static.vecteezy.com/system/resources/thumbnails/001/500/443/small_2x/dislike-icon-free-vector.jpg" alt="" 
        style={{width:'30px',height:'30px',margin:'5px'}}
        onClick={DisLikeHandler}
        />
        <h3>{dislike} DisLike</h3>
    </div>
    </div>
    </>
  )
}

export default LikeDislike