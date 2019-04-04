import React from "react"
import Image from "gatsby-image"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import "../components/item.css"

// The single item page for each individual item

const Item = props => {
  const { node } = props.location.state
  return (
    <>
      <NavBar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Image fixed={node.image.fixed} />
            </div>
            <div className="col-sm">
              <div className="itemContainer">
                <h6 className="p-3 itemProductHeader">About Product</h6>
                <div className="row">
                  <div className="col-sm">
                    <div className="px-3">
                      <p>{node.name}</p>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="px-3">
                      <p>${node.price}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <p className="p-3">{node.description.description}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="p-3">
                      <button className="btn btn-block">add to cart +</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Item
