import React from 'react';

export default function ProductImage(props) {

  React.useEffect(() => {
    props.whoRender('related')
  }, [])

  function removeOutfit(selected) {
    let currentOutfits = props.outfits
    let removeOutfit = currentOutfits.filter((product) => product.id !== Number(selected.product_id));
    props.setSaved(removeOutfit)
  }

  if (props.render === 'related') {
    return(
      <div className="card-product-image">
        <img src={`${props.currentItem.results[0].photos[0].url}`}/>
        <button className="modal-button">x</button>
      </div>
    )
  } else  {
    return(
      <div className="card-product-image">
      <img src={`${props.currentItem.results[0].photos[0].url}`}/>
      <button className="remove-card-entry" onClick={() => removeOutfit(props.currentItem)}>y</button>
    </div>
    )
  }
  // return(
  //   <>
  //     {props.render === 'related' && (
  //       <div className="card-product-image">
  //         <img src={`${props.currentItem.results[0].photos[0].url}`}/>
  //         <button className="modal-button">x</button>
  //       </div>
  //     )}
  //     {props.render === 'outfit' && (
  //       <div className="card-product-image">
  //         <img src={`${props.currentItem.results[0].photos[0].url}`}/>
  //         <button className="remove-card-entry" onClick={() => removeOutfit()}>y</button>
  //       </div>
  //     )}
  //   </>
  // )
}
