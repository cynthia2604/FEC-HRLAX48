import React from 'react';
import utils from '../utils.js'
import axios from 'axios'
import Options from '../../config.js';

export default function RelatedItemRating(props) {

  const [relatedItemRating, setRelatedItemRating] = React.useState()

  React.useEffect(() => {
    axios.get(`${Options.URL}/reviews/?product_id=${props.currentItem.product_id}&count=99`, {
      headers: {
        Authorization: Options.TOKEN
      }
    })
      .then(res => {
      function roundQuarter(num) {
          return Math.round(num * 4) / 4;
      }
      let average = 0;
        if (res.data.results.length) {
          for (let i = 0; i < res.data.results.length; i++) {
            average += res.data.results[i].rating;
          }
          average = average / res.data.results.length;
        }
      setRelatedItemRating(roundQuarter(average));
    })
  }, [props.currentItem])

  return(
    <div className="related-product-rating">
      {relatedItemRating &&
        <div className="rating"style={{paddingBottom:'10px', marginLeft: '10px'}}>
        {
          (props.darkTheme) ? utils.starRatingWhite(relatedItemRating) : utils.starRating(relatedItemRating)
        }
        </div>
      }
    </div>
  )
}
