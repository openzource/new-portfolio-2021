import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from 'styled-components'




const SectionCaption = styled.p`
  font-weight: 600px;
  font-size: 18px;
  text-transform: uppercase;
  color: black !important;
  text-align: center;

`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px){
    grid-template-columns: repeat(1,1fr);
  }
`

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
      
      <SectionCaption>12 secciones - 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell 
          title={cell.title}
          image={cell.image} />
          ))
        }
      </SectionCellGroup>
    </div>
    
  </Layout>
)

export default IndexPage
