import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/Landing"
import Menu from "../components/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing
      img={data.img.childImageSharp.fluid}
      backgroundStyle="backgroundContainer"
    />
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
