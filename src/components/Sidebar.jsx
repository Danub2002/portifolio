import React from 'react'
import Avatar from "../img/eu.jpg"
import "../styles/components/sidebar.sass"
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return <aside id ="sidebar" >

    <img src={Avatar} alt="Danilo Andrade" />
    <p className = "title">Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    
    <a href="" className = "btn">Download CV</a>
  </aside>
    
  
}

export default Sidebar