import React from 'react'
import './styles/ContainerIconsComments.css'
import orderIcon from "../assets/static/orderIcon.png"

const ContainerIconsComments = () =>(
    <a href="/#" className="containerIconsComments">
      <img src={orderIcon} alt="" className="imageComments" />
      <p className="comentsText">ORDENAR POR</p>
    </a>
)

export default ContainerIconsComments