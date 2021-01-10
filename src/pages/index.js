import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Soy yas y diseño apps</h1>
        <p>Diseño aplicaciones que obedecen a un orden divino</p>
        <Link to="/page-2/">Conocer más</Link> <br />
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
