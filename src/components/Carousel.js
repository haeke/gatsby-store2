import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

const Carousel = () => (
  <StaticQuery
    query={graphql`
      {
        camping_1: file(relativePath: { eq: "camping_1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        camping_2: file(relativePath: { eq: "camping_2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        camping_3: file(relativePath: { eq: "camping_3.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        camping_4: file(relativePath: { eq: "camping_4.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <section className="col-md-6 mt-5 mx-auto">
          <h1 className="text-center brandColor mt-2 mb-2">Outdoors</h1>
          <CarouselProvider
            naturalSlideWidth={600}
            naturalSlideHeight={600}
            totalSlides={4}
          >
            <Slider>
              <Slide index={0}>
                <Image
                  src={data.camping_1.childImageSharp.fluid.src}
                  alt="Camping 1"
                />
              </Slide>
              <Slide index={1}>
                <Image
                  src={data.camping_2.childImageSharp.fluid.src}
                  alt="Camping 2"
                />
              </Slide>
              <Slide index={2}>
                <Image
                  src={data.camping_3.childImageSharp.fluid.src}
                  alt="Camping 3"
                />
              </Slide>
              <Slide index={3}>
                <Image
                  src={data.camping_4.childImageSharp.fluid.src}
                  alt="Camping 4"
                />
              </Slide>
            </Slider>
            <ButtonBack className="menuButton">Back</ButtonBack>
            <ButtonNext className="menuButton">Next</ButtonNext>
          </CarouselProvider>
        </section>
      )
    }}
  />
)

export default Carousel
