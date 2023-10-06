import React, { useState } from 'react'

const Likes = () => {

const [like, setlike] = useState(0);

  return (
    <div>Likes: {like} <button onClick={()=> setTimeout(()=>{setlike((like)=>like+1)},2000)}>+</button></div>
  )
}

export default Likes