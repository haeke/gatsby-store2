import React from "react"

import whistle from "../images/whistle.svg"
import compass from "../images/compass.svg"
import rope from "../images/rope.svg"

import FeatureItem from "./FeatureItem"

const Features = () => {
  return (
    <section className="featuresContainer">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <FeatureItem
              featureLogo={whistle}
              featureAlt="Whistle Icon"
              featureDescription="The outdoor survival bracelet includes an emergency whistle to signal rescuers located on the buckle."
            />
          </div>
          <div className="col-sm">
            <FeatureItem
              featureLogo={compass}
              featureAlt="Compass Icon"
              featureDescription="The outdoor survival bracelet includes a compass so that you won't lose your way."
            />
          </div>
          <div className="col-sm">
            <FeatureItem
              featureLogo={rope}
              featureAlt="Whistle Icon"
              featureDescription="A durable parachute cord that can be unravled into a 3 meter rope and used in an emergency situation."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
