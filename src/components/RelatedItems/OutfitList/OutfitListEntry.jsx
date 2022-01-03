import React from 'react';
import OutfitListImage from './OutfitListImage'
import RelatedItemRating from '../RelatedItemRating'
import axios from 'axios'
import Options from '../../../config.js';
import utils from '../../utils.js'

export default function OutListEntry (props) {
  const [currentRating, setCurrentRating] = React.useState({})

  React.useEffect(()=>{
    const params = {
      product_id: props.currentView.id
    }
    axios.get(`${Options.URL}/products/${params.product_id}/styles/?count=20`, {
      headers: {
        Authorization: Options.TOKEN
      }
    }).then(res => setCurrentRating(res.data))
  }, [])

  return (
    <>
    {(props.outfits && props.currentView) &&
      <div className="product-card-entry">
        <OutfitListImage
          setSaved={props.setSaved}
          outfits={props.outfits}
          setSelectRelated={props.setSelectRelated}
          selectedStyle={props.selectedStyle}
          currentStyle={props.currentStyle}
        />
        <div className="user-product-category" style={{fontSize: '1em', marginLeft: '10px'}}>{props.currentStyle.color}</div>
        <div className="user-product-name" style={{fontWeight:'bold', marginLeft: '10px', overflow:'hidden'}}>{props.currentView.name}</div>
        {props.currentStyle.salePrice ? (
             <div className="user-product-price" style={{fontSize: '0.8em', marginLeft: '10px'}}>
                <span>
                  <s>{`$${props.currentStyle.originalPrice}`}</s>
                </span>
                <span style={{ color: "red" }} className="ms-2">
                  {`$${props.currentStyle.salePrice}`}
                </span>
              </div>
            ) : (
              <div className="user-product-price" style={{fontSize: '0.8em', marginLeft: '10px'}}>
               {`$${props.currentStyle.originalPrice}`}
              </div>
            )
        }
        <div className="related-product-rating"  style={{paddingBottom:'10px', marginLeft: '10px'}}>
          {(props.darkTheme) ? utils.starRatingWhite(props.rating) : utils.starRating(props.rating)}
        </div>
      </div>
    }
    </>
  )
}
//   {selected.salePrice ? (
//     <div>
//       <span>
//         <s>{"$" + selected.originalPrice}</s>
//       </span>
//       <span style={{ color: "red" }} className="ms-2">
//         {"$" + selected.salePrice}
//       </span>
//     </div>
//   ) : (
//     "$" + selected.originalPrice
//   )}

// }

// <div className="user-product-price" style={{fontSize: '0.8em', marginLeft: '10px'}}>{props.currentStyle.originalPrice}</div>