import React from "react"

export default function RatingsAndReviews(props) {

  function handleClick(product){
    props.setSelected(product)
    props.setView('detail')
  }

  const products = props.products.map(product => (
    <div onClick={() => handleClick(product)} key={product.id}>
      <p>{product.name}</p>
      <p>{product.default_price}</p>
    </div>
  ))
  return (
    <div>
      {products}
    </div>
  )
}