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
        <div className="aboutWrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <p className="py-4 mainWhite">
                  A Paracord Bracelet is a bracelet woven out of paracord.
                  Paracord bracelets are also known as survival bracelets, 550
                  cord bracelets, or parachute cord bracelets and are considered
                  a survival tool. The bracelets are worn by survivalists,
                  hikers, climbers, campers, or anyone who enjoys the outdoors.
                  These bracelets become extremely handy in survival or
                  emergency situations. The cord itself is made up of 7 inner
                  strands which each contain 3 inner strands of their own, which
                  give you a ton of cord to play around with.
                </p>
              </div>
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
