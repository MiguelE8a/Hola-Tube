import React from 'react'
import './styles/Header.css'
import HeaderIcon02 from "../assets/static/Header_Logo-img2.png"
import HeaderInputimg from "../assets/static/HeaderInput-img.png"
import HeaderMicrofono from "../assets/static/HeaderMicrofono.png"
import HeaderIcon01 from "../assets/static/HeaderIcon01-img.png"
import HeaderIcon002 from "../assets/static/HeaderIcon02-img.png"
import HeaderIcon03 from "../assets/static/HeaderIcon03-img.png"
import HeaderIcon04 from "../assets/static/HeaderIcon04-img.png"
import HeaderIcon05 from "../assets/static/HeaderIcon05-img.png"
import HeaderIcon06 from "../assets/static/HeaderIcon06-img.png"

const Header = () => {
  return(
  <header className="Header">
    <div className="Header__Container">
      <div className="Header__Logo">
        <a href="/#" className="Header__Logo--A">
          <img src={HeaderIcon02} alt="Yotube-Logo" className="Header_Logo-img" />
        </a>
        <a href="/#" className="Header__Logo--B">
          <img src={HeaderIcon05} alt="" className="Header_Logo-img2" />
        </a>
        <div className="Header__Logo--ContainerPE">
          <p  className="Header--PE">PE</p>
        </div>
      </div>
      <div className="Header__ContainerInput">
        <input type="text" className="HeaderInput" placeholder="Buscar" />
        <button className="HeaderInput__Button">
          <img src={HeaderInputimg} alt="Search-img" className="HeaderInput__img" />
       </button>
       <a href="#/" className="HeaderMicrophone">
         <img src={HeaderMicrofono} alt="" className="Microphone__img" />
       </a>
      </div>

      <div className="headerIcons">
        <div className="HeaderIcons01">
          <img src={HeaderIcon01} alt="" className="HeaderIcons01__img" />
        </div>
        <div className="HeaderIcon01">
          <img src={HeaderIcon002} alt="" className="HeaderIcons01__img" />
        </div>
        <div className="HeaderIcon01">
          <img src={HeaderIcon03} alt="" className="HeaderIcons01__img" />
        </div>
        <div className="HeaderIcon01">
          <img src={HeaderIcon06} alt="" className="HeaderIcons02__img" />
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header