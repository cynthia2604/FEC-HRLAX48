import React from 'react';

export default function ProductImage(props) {
  // const image = props.currentItem.results[0].photos[0].url
  return(
    <div className="related-product-image">
      <img src={`${props.currentItem.results[0].photos[0].url}`}/>
    </div>
  )
}