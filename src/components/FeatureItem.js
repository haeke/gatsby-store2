import React from "react"
import PropTypes from "prop-types"

const FeatureItem = ({ featureLogo, featureAlt, featureDescription }) => {
  return (
    <article className="featureItemContainer">
      <img
        src={featureLogo}
        alt={featureAlt}
        style={{ width: 100, height: 100 }}
      />
      <p className="featureItemDescription">{featureDescription}</p>
    </article>
  )
}

FeatureItem.propTypes = {
  featureLogo: PropTypes.string,
  featureAlt: PropTypes.string,
  featureDescription: PropTypes.string,
}

FeatureItem.defaultProps = {
  featureLogo: "../images/rope.svg",
  featureAlt: "Logo",
  featureDescription:
    "A general purpose emergency highly durable paracord rope.",
}

export default FeatureItem
