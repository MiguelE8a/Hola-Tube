import React from 'react'
import LikeComent from './LikeComent'
import DislikeComment from './DislikeComment'
import AnswerComent from './AswerComent'
import './styles/ContentIconsComments.css'

const ContentIconsComments = () => {
  return(
    <div className="contentIconsComments">
      <LikeComent/>
      <p className="cantDislikeComment">1,001</p>
      <DislikeComment/>
      <AnswerComent/>

    </div>
  )
}

export default ContentIconsComments