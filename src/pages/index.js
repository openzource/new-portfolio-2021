import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GatsbyImage from "gatsby-image"
import Card from "../components/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Soy yas y diseño apps</h1>
        <p>Diseño aplicaciones que obedecen a un orden divino</p>
        <Link to="/page-2/">Conocer más</Link> <br />
        <div className="Logos">
          <img src={require('../images/gatsby-icon.png')} width="50" />
          <img src={require('../images/gatsby-icon.png')} width="50" />
          <img src={require('../images/gatsby-icon.png')} width="50" />
          <img src={require('../images/gatsby-icon.png')} width="50" />
          <img src={require('../images/gatsby-icon.png')} width="50" />
        </div>
        <svg width="100%" height="172"  fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <path fill="white">
            <animate repeatCount="indefinite"
            fill="freeze" attributeName="d" dur="10s"
            values="M0 25.9086C277 84.5821 433 65.736 720 
          25.9086C934.818 -3.9019 1214.06 -5.23669 1442 
          8.06597C2079 45.2421 2208 63.507 2560 25.9088V171.91L0 
          171.91V25.9086Z;
          
          M0 86.3149C316 86.315 444 159.155 884 51.1554C1324
          -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156
          188.408 2560 86.315V232.317L0 232.316V86.3149Z;

          M0 53.6584C158 11.0001 213 0 363 0C513 0
          855.555 115.001 1154 115.001C1440 115.001
          1626 -38.0004 2560 53.6585V199.66L0
          199.66V53.6584Z;

          M0 25.9086C277 84.5821 433 65.736 720 
          25.9086C934.818 -3.9019 1214.06 -5.23669 1442 
          8.06597C2079 45.2421 2208 63.507 2560 25.9088V171.91L0 
          171.91V25.9086Z
          
          "
            />
            </path>
        </svg>
      </div>
      <div className="Cards">
        <h2>Portafolio de trabajo</h2>
        <div className="CardGroup">
        <Card 
          title="Farmguard.io"
          text="WEB"
          image={require('../images/2020.jpg')} />
          <Card 
          title="Awto Chile"
          text="Product Design UI/UX"
          image={require('../images/2020.jpg')} />
          <Card 
          title="Kaufmann"
          text="Product Design / UI"
          image={require('../images/2020.jpg')} />
          <Card 
          title="Mine Dust Dashboard"
          text="WEB / UI Design"
          image={require('../images/2020.jpg')} />
        </div>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
