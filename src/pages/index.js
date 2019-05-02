import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/Landing"
import Features from "../components/Features"
import Carousel from "../components/Carousel"
import Menu from "../components/Menu"
import Title from "../components/Title"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing
      img={data.img.childImageSharp.fluid}
      backgroundStyle="backgroundContainer"
    />
    <div className="container">
      <Title
        title="Multi-Functional Paracord Bracelet"
        titleStyle="brandColor py-3"
      />
    </div>
    <Features />
    <Carousel />
    <Menu items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "camping.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulParacordProduct {
      edges {
        node {
          id
          price
          name
          description {
            description
          }
          image {
            fixed(width: 100, height: 100) {
              src
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
