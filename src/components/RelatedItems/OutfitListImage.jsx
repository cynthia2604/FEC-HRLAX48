import React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function OutfitListImage(props) {

  function removeOutfit(selected) {
    let removeOutfit = selected.filter((product) => product.color !== props.currentStyle.color);
    props.setSaved(removeOutfit)
  }

  return(
    <>
    {props.currentStyle &&
      <div className="card-product-image">
       <img src={`${props.currentStyle.photos[0].thumbnail_url}`}/>
      <HighlightOffIcon className="remove-card-entry" onClick={() => removeOutfit(props.outfits)} />
      </div>
    }
    </>
  )
}


/* <img src={`${props.selectedStyle.photos[0].thumbnail_url}`}/> */