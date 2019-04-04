import React from "react"

// The single item page

const Item = props => {
  const { node } = props.location.state
  return (
    <section>
      <p>Product: {node.name}</p>
      <h1>Item Page</h1>
    </section>
  )
}

export default Item
