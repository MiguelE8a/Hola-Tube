import React from 'react'
import './styles/ContainerComments.css'

const ContainerComments = ({children}) =>{
  return(
    <div className="containerComments">
      <div className="contUserName">
        <p className="userNameComments">User_nameeeeeeeeee</p>
        <p className="dateComments">1 week ago</p>
      </div>
      {children}
    </div>
  )

}
export default ContainerComments