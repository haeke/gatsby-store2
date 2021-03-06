import React, { useState, useEffect } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

import Title from "./Title"

// We used a page query to get the list of edges returned from contentful.
const Menu = ({ items }) => {
  /// the list of items that we will display when we filter items
  const [menuItems, updateMenuItems] = useState(items.edges)
  useEffect(() => {
    updateMenuItems(items.edges)
  }, [items.edges])

  if (menuItems.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="Bracelets" titleStyle="brandColor" />
          <div className="row">
            {menuItems.map(({ node }) => (
              <div
                key={node.id}
                className="col-10 col-md-6 my-3 d-flex mx-auto"
              >
                <div>
                  <Image fixed={node.image.fixed} />
                </div>
                {/* menu item information */}
                <div className="flex-grow-1 px-3">
                  <div className="d-flex justify-content-between">
                    <div className="mb-0">
                      <h6 className="brandColor">{node.name}</h6>
                    </div>
                    <div className="mb-0">
                      <h6 className="menuPrice">${node.price}</h6>
                    </div>
                  </div>
                  <div className="text-muted">
                    <h6>{node.description.description}</h6>
                  </div>
                  <button
                    className="menuButton snipcart-add-item"
                    data-item-id={node.id}
                    data-item-name={node.name}
                    data-item-image={node.image.fixed.src}
                    data-item-price={node.price}
                    data-item-description={node.title}
                    data-item-url="https://paracord-store-gatsby.netlify.com"
                  >
                    add to cart +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <Title title="Items Coming Soon..." />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
