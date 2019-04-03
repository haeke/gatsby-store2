import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Menu items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
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
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
