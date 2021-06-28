import React from 'react'
import './styles/ContainerVideo.css'

const ContainerVideo = () =>(
      <div className="container__Video">
        <iframe className="video" src="https://www.youtube.com/embed/8LjOG7FSL_Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
)

export default ContainerVideo