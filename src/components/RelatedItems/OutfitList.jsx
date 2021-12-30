import React from 'react';
import ProductCardEntry from './ProductCardEntry'

export default function OutfitList(props) {
  const [whoRender, setWhoRender] = React.useState('outfit')

  function saveOutfit(selected) {
    let noDuplicateOutfits = props.outfits.filter(product => product.id !== selected.id)
    props.setSaved([...noDuplicateOutfits, selected])
    localStorage.setItem('outfits', JSON.stringify(props.saved))
  };

  const entry = props.outfits.map(product => (
    <div className="user-card-list" key={product.id}>
      <ProductCardEntry
        currentItem={product}
        render={whoRender}
        setSaved={props.setSaved}
        outfits={props.outfits}
        whoRender={whoRender}
        selectedStyle={props.selectedStyle}
      />
    </div>
  ))

  return(
    <div className="user-outfits">
      <div className="card-products-list">
      <button className="btn btn-light btn-square btn-xl" onClick={() => saveOutfit(props.currentView)}> Add Outfit </button>
      {entry}
      </div>
    </div>
  )
}

