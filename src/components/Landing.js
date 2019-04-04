import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import Title from "./Title"

const Landing = ({ img, backgroundStyle }) => {
  return (
    <BackgroundImage fluid={img} className={backgroundStyle} Tag="section">
      <Title title="Camping Supplies" titleStyle="titleHeader" />
    </BackgroundImage>
  )
}

Landing.propTypes = {
  img: PropTypes.string,
  backgroundStyle: PropTypes.string,
}

Landing.defaultProps = {
  img: "",
  backgroundStyle: "default-background",
}

export default Landing
