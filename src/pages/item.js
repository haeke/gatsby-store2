import React from "react"
import Image from "gatsby-image"
// The single item page for each individual item.

const Item = props => {
  const { node } = props.location.state
  return (
    <section>
      <Image fixed={node.image.fixed} />
      <p>Product: {node.name}</p>
      <h1>Item Page</h1>
    </section>
  )
}

export default Item
