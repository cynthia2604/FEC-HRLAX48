import React from 'react';
import axios from 'axios';
import Options from '../../config.js';

export default function ProductImage(props) {

  function removeOutfit(selected) {
    let currentOutfits = props.outfits
    let removeOutfit = currentOutfits.filter((product) => product.id !== Number(selected.product_id));
    props.setSaved(removeOutfit)
  }

  function showComparison(selected) {
    props.setRenderTable(!props.renderTable)
     axios.get(`${Options.URL}/products/${Number(selected.product_id)}`, {
       headers: {
         Authorization: Options.TOKEN
       }
     }).then((res) => {
        props.setSelectRelated(res.data)
     })
  }

  if (props.render === 'related') {
    return(
      <div className="card-product-image">
        <img src={`${props.currentItem.results[0].photos[0].url}`}/>
        <button className="modal-button" onClick={() => showComparison(props.currentItem)}>☆</button>
      </div>
    )
  } else  {
    return(
      <div className="card-product-image">
      <img src={`${props.currentItem.results[0].photos[0].url}`}/>
      <button className="remove-card-entry" onClick={() => removeOutfit(props.currentItem)}>x</button>
    </div>
    )
  }
}
