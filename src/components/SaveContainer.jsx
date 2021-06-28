import React from 'react'
import './styles/SaveContainer.css'
import saveIcon from "../assets/static/saveIcon.png"

const SaveContainer = ({children}) => (
    <a href="/#" className="saveContainer">
      <img src={saveIcon} alt="" className="saveIcon" />
      {children}
    </a>
)

export default SaveContainer