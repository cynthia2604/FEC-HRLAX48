import React from 'react';
import OutfitListImage from './OutfitListImage';
import RelatedItemRating from '../RelatedItemRating';
import axios from 'axios';
import Options from '../../../config.js';
import utils from '../../utils.js';
import { useStateValue } from "../../Overview/store/StateProvider";

export default function OutListEntry(props) {
  const [currentRating, setCurrentRating] = React.useState();
  const [{ selected }, dispatch] = useStateValue();

  React.useEffect(() => {
    const params = {
      product_id: props.currentStyle.productId,
    };
    if (params.product_id) {
      axios
        .get(`${Options.URL}/products/${params.product_id}/styles/?count=20`, {
          headers: {
            Authorization: Options.TOKEN,
          },
        })
        .then((res) => setCurrentRating(res.data));
    }
  }, [props.currentStyle]);

  function changeView () {
    axios.get(`${Options.URL}/products/${props.currentStyle.productId}`, {
      headers: {
        Authorization: Options.TOKEN,
      }
    })
    .then(res => {
     props.setSelected(res.data)
    })

    // setTimeout(() => {
    //   dispatch({
    //     type: "ADD_TO_SELECTED",
    //     item: {
    //       color: props.currentStyle.name,
    //       skus: props.currentStyle.skus,
    //       photos: props.currentStyle.photos,
    //       originalPrice: props.currentStyle.originalPrice,
    //       salePrice: props.currentStyle.salePrice,
    //       thumbnail: props.currentStyle.thumbnail,
    //       productId: props.currentStyle.productId,
    //       productName: props.currentStyle.productName,
    //       category: props.currentStyle.category,
    //       },
    //   })
    // }, 500)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function displayStyle() {
    dispatch({
      type: "ADD_TO_SELECTED",
      item: {
        color: props.currentStyle.name,
        skus: props.currentStyle.skus,
        photos: props.currentStyle.photos,
        originalPrice: props.currentStyle.originalPrice,
        salePrice: props.currentStyle.salePrice,
        thumbnail: props.currentStyle.thumbnail,
        productId: props.currentStyle.productId,
        productName: props.currentStyle.productName,
        category: props.currentStyle.category,
        },
    })
  }


  return (
    <>
      {props.currentStyle && currentRating && (
        <div
          className='outfit-card-entry'
          style={{ width: `${(props.outfits.length / 4) * 30}%` }}
          onClick={() => {changeView(); displayStyle()}}
          type="button"
        >
          <OutfitListImage
            setSaved={props.setSaved}
            outfits={props.outfits}
            setSelectRelated={props.setSelectRelated}
            selectedStyle={props.selectedStyle}
            currentStyle={props.currentStyle}
          />
          <div
            className='user-product-category'
            style={{ fontSize: '0.8em', marginLeft: '10px' }}
          >
            {props.currentStyle.color}
          </div>
          <div
            className='user-product-name'
            style={{
              fontWeight: 'bold',
              marginLeft: '10px',
              overflow: 'hidden',
            }}
          >
            {props.currentStyle.productName}
          </div>
          {props.currentStyle.salePrice ? (
            <div
              className='user-product-price'
              style={{ fontSize: '0.8em', marginLeft: '10px' }}
            >
              <span>
                <s>{`$${props.currentStyle.originalPrice}`}</s>
              </span>
              <span style={{ color: 'red' }} className='ms-2'>
                {`$${props.currentStyle.salePrice}`}
              </span>
            </div>
          ) : (
            <div
              className='user-product-price'
              style={{ fontSize: '0.8em', marginLeft: '10px' }}
            >
              {`$${props.currentStyle.originalPrice}`}
            </div>
          )}
          <RelatedItemRating
            currentItem={currentRating}
            darkTheme={props.darkTheme}
          />
        </div>
      )}
    </>
  );
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


// dispatch({
//   type: "ADD_TO_SELECTED",
//   item: {
//     color: props.currentStyle.name,
//     skus: props.currentStyle.skus,
//     photos: props.currentStyle.photos,
//     originalPrice: props.currentStyle.originalPrice,
//     salePrice: props.currentStyle.salePrice,
//     thumbnail: props.currentStyle.thumbnail,
//     productId: props.currentStyle.productId,
//     productName: props.currentStyle.productName,
//     category: props.currentStyle.category,
//   },
// })