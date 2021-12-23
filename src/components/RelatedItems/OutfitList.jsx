import React from 'react';
import ProductCardEntry from './ProductCardEntry'

export default function OutfitList(props) {


  function saveOutfit(selected) {
    let noDuplicateOutfits = props.outfits.filter(product => product.id !== selected.id)
    props.setSaved([...noDuplicateOutfits, selected])
    props.whoRender('outfit')
  }

  const entry = props.outfits.map(product => (
    <div className="user-card-list" key={product.id}>
      <ProductCardEntry
        currentItem={product}
        render={props.render}
        setSaved={props.setSaved}
        outfits={props.outfits}
        // whoRender={props.whoRender}
      />
    </div>
  ))


  return(
    <div className="user-outfits">
      <div className="card-products-list">
      <button className="btn btn-light btn-square btn-xl" onClick={() => saveOutfit(props.currentView)}> + </button>
      {entry}
      </div>
    </div>
  )
}

