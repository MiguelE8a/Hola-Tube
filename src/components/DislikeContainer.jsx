import React from 'react'
import './styles/DislikeContainer.css'
import handDown from "../assets/static/handDown.png"

const DislikeContainer = ({children}) => (
    <a href="/#" className="dislikeContainer">
      <div className="containDislikeIcon">
        <img src={handDown} alt="dislike Icon" className="dislikeIcon"/>
      </div>
      {children}
    </a>
)

export default DislikeContainer