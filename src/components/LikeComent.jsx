import React from 'react'
import './styles/LikeComent.css'
import HandUp from "../assets/static/HandUp.png"

const LikeComent = () => (
  <button className="likeComent">
    <img src={HandUp} alt="Like Coment Icon" className="likeComent"/>
  </button>
)

export default LikeComent