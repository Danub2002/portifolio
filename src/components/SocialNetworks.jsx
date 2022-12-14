import React from "react"
import {FaLinkedinIn, FaGithub} from "react-icons/fa"

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />,href: "https://www.linkedin.com/in/danilo-andrade-031208213/"},
  { name: "github", icon: <FaGithub />, href: "https://github.com/Danub2002"},
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
    {socialNetworks.map((network) => (
      <a href={network.href} className="social-btn" id={network.name} key={network.name}>
        {network.icon}
      </a>
    ))}
  </section>
  )
}

export default SocialNetworks