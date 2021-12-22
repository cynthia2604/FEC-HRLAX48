import React from 'react';

export default function RelatedProductEntry(props) {
  return (
    <div className="related-product-card-entry">
      <img src="http://placecorgi.com/250" />
      <div className="related-product-category"> {props.product.category}</div>
      <div className="related-product-name">{props.product.name}</div>
      <div className="related-product-price">{props.product.default_price}</div>
    </div>
  )
}

