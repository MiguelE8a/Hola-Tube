import React from 'react'
import ContainerComments from './ContainerComments'
import Comment from './Comment'
import ContentIconsComments from './ContentIconsComments'
import './styles/MainContainerComents.css'
import HeaderIcon04 from "../assets/static/HeaderIcon04-img.png"

const MainContainerComents = () => {

  return (
  <div className="mainContainerComents">
    <div className="contImageUser">
      <img src={HeaderIcon04} alt="imgUserComent" className="imgUserComent" />
    </div>
    <ContainerComments>
      <Comment/>
      <ContentIconsComments/>
    </ContainerComments>
    
  </div>
  )
}

export default MainContainerComents