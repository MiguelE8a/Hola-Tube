import React from 'react'
import './styles/LikeContainer.css'
import HandUp from "../assets/static/HandUp.png"

const LikeContainer = ({children}) => (
  <a href="/#" className="likeContainer">
    <div className="containLikeIcon">
      <img src={HandUp} alt="likeIcon" className="likeIcon" />
    </div>
    {children}
  </a>
)

export default LikeContainer