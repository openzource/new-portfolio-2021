import { Link } from "gatsby"
import React from "react"
import logo from "../images/gatsby-icon.png"
import './Header.css'


class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount () {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }


  render () {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={logo} width="30" /></Link>
          <Link to="/About_me">About me</Link>
          <Link to="/About_me">Work</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}


export default Header
