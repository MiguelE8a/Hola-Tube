import React from 'react'
import './styles/SharedContainer.css'
import sharedIcon from "../assets/static/sharedIcon.png"

const SharedContainer = ({children}) => (
    <a href="/#" className="sharedContainer">
      <img src={sharedIcon} alt="shared Icon" className="sharedIcon" />
      {children}
    </a>
)

export default SharedContainer