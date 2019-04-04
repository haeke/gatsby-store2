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
                <Link
                  className="menuLink"
                  to="/item"
                  key={node.id}
                  state={{ node }}
                >
                  <div>
                    <Image fixed={node.image.fixed} />
                  </div>
                  {/* menu item information */}
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <small>{node.name}</small>
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        <small className="menuPrice">${node.price}</small>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </Link>
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
