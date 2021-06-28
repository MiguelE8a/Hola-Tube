import React from 'react'
import './styles/CampaignIcon.css'
import campaignIcon from "../assets/static/campaign-Icon.png"

const CampaignIcon = () => (
  <React.Fragment>
    <img src={campaignIcon} alt="campana icono" className="campaign-Icon"/>
  </React.Fragment>
)

export default CampaignIcon