import React from 'react'
import './styles/ContainerItemVideo.css'

const ContainerItemVideo = () =>(
  <div className="container-itemVideo">
    <a href="/#" className="container-itemVideo__a">
      <div className="itemVideo-a">
          <img src="https://i.ytimg.com/vi/NE0di4Aqa_Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAkVlMg4TT82iY7dJyL9LBS_favuQ" alt="gif" className="itemVideo-img" />
      </div>
      <div className="cont-ItemDescription">
        <p className="title-Item">Qué está pasando en Colombia en el 2021 🇨🇴</p>
        <p className="channeltitel">Platzi</p>
        <p className="viewsItem">337,545 . hace 1 año</p>
      </div>
    </a>
  </div>
)

export default ContainerItemVideo