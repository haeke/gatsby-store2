import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-background-image"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Title from "../components/Title"

const About = ({ data }) => {
  return (
    <>
      <NavBar />
      <section className="fullHeight">
        <Image
          fluid={data.img.childImageSharp.fluid}
          className="aboutContainer"
          Tag="div"
        >
          <Title title="About Us" titleStyle="aboutHeader" />
        </Image>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              alias aliquid reprehenderit quam! Obcaecati, dolore. Ipsa
              voluptates similique ducimus ipsam at, velit a eum nobis est non
              dolores totam, quam eligendi minima, corporis earum. Quasi
              corporis consequuntur et adipisci mollitia aperiam praesentium
              molestias, quibusdam possimus inventore repudiandae velit placeat
              voluptas!
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "bracelet-selection.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default About
