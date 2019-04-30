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
          <div className="container skewY">
            <h1 className="text-center mainWhite">A Tool For Survival</h1>
            <div className="row py-4">
              <div className="col-md-6 col-sm-12">
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
              <div className="col-md-6 col-sm-12">
                <p className="py-4 mainWhite">
                  An intact paracord bracelet used on a wrist or lower leg, or a
                  section of strap cord used on the larger part of a limb, can
                  and has been used in a tourniquet to stop severe bleeding.
                  Paracord bracelets also provide suitable material for lashing
                  together splints. Unless you have a backpack full of duct
                  tape, you'll need some strong material to fabricate a splint
                  for arms or legs that need support. From sticks and branches,
                  to rigid bark strips, there's rarely a shortage of stiff
                  splinting material in the wild. But strong lashing material
                  can be hard to come by.
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
