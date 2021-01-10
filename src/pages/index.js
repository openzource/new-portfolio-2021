import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GatsbyImage from "gatsby-image"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"

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
        <Wave />
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
      <Section 
        image={require ('../images/bg.jpg')}
        logo={require('../images/gatsby-icon.png')}
        title="Qué es lo que hago y cómo lo hago"
        text="It is a long established fact that a reader will be distracted 
        by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
        as opposed to using 'Content here, content here', making it look like readable English."
      />
    </div>
    
  </Layout>
)

export default IndexPage
