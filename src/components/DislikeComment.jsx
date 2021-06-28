import React from 'react'
import './styles/DislikeComment.css'
import handDown from "../assets/static/handDown.png"

const DislikeComment = () =>(
  <button className="dislikeComent">
    <img src={handDown} alt="dislike Coment" className="dislikeComent"/>
  </button>
)

export default DislikeComment