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
      <section className="fullHeight">
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
                      <p className="menuName">{node.name}</p>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="px-3">
                      <p className="menuPrice">${node.price}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <p className="p-3 menuDescription">
                      {node.description.description}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <button
                      className="menuButton snipcart-add-item"
                      data-item-id={node.id}
                      data-item-name={node.name}
                      data-item-image={node.image.fixed.src}
                      data-item-price={node.price}
                      data-item-description={node.title}
                      data-item-url="http://localhost"
                    >
                      add to cart +
                    </button>
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
