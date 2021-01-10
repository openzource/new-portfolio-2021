import { Link } from "gatsby"
import React from "react"
import logo from "../images/gatsby-icon.png"
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={logo} width="30" /></Link>
      <Link to="/About_me">About me</Link>
      <Link to="/About_me">Work</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
)


export default Header
