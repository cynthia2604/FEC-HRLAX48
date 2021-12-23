import React from 'react';

export default function ProductImage(props) {
  if (props.render === 'related') {
    return(
      <div className="card-product-image">
        <img src={`${props.currentItem.results[0].photos[0].url}`}/>
        <button className="remove-card-entry">x</button>
      </div>
    )
  } else {
    return(
      <div className="card-product-image">
      <img src={`${props.currentItem.results[0].photos[0].url}`}/>
      <button className="remove-card-entry">y</button>
    </div>
    )
  }
}