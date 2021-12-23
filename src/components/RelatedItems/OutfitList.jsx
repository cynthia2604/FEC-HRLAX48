import React from 'react';
import RelatedProductEntry from './RelatedProductEntry'

export default function OutfitList(props) {


  function saveOutfit(selected) {
    let noDuplicateOutfits = props.outfits.filter(product => product.id !== selected.id)
    props.setSaved([...noDuplicateOutfits, selected])
  }

  const entry = props.outfits.map(product => (
    <div className="user-card-list" key={product.id}>
      <RelatedProductEntry related={product}/>
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