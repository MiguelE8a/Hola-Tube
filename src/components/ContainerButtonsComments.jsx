import React from 'react'
import CancelButtonComments from './CancelButtonComments'
import CommentButtonComments from './CommentButtonComments'
import './styles/ContainerButtonsComments.css'

const ContainerButtonsComments = () =>(
  <div className="containerButtonsComments">
    <CancelButtonComments/>
    <CommentButtonComments/>
  </div>
)

export default ContainerButtonsComments