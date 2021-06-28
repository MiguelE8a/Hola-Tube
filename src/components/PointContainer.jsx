import React from 'react'
import './styles/PointContainer.css'
import pointIcon from "../assets/static/pointIcon.png"

const PointContainer = () =>(
    <a href="/#" className="ponitContaienr">
      <img src={pointIcon} alt="" className="ponitIcon" />
    </a>
)

export default PointContainer