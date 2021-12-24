import React from 'react'
import axios from 'axios'
import Options from '../../config'
import StarColumn from './StarColumn'
import ReviewColumn from './ReviewColumn'
import utils from '../utils'

export default function RatingsAndReviews(props) {

  const [productInfo, setProductInfo] = React.useState()
  const [productMeta, setProductMeta] = React.useState()
  const [percentage, setPercentage] = React.useState(100)
  const [starFilter, setStarFilter] = React.useState(0)

  React.useEffect(() => {
    fetchReviews()
    fetchMeta()
  }, [props.selected])

  function fetchReviews() {
    axios.get(`${Options.URL}/reviews/?product_id=${props.selected.id}&count=999`, {
      headers: {
        Authorization: Options.TOKEN
      }
    })
      .then(res => setProductInfo(res.data))
  }

  function fetchMeta() {
    axios.get(`${Options.URL}/reviews/meta/?product_id=${props.selected.id}`, {
      headers: {
        Authorization: Options.TOKEN
      }
    })
      .then(res => {
        setProductMeta(res.data)
        setPercentage(Math.round(100 * (Number(res.data.recommended.true) / (Number(res.data.recommended.false) + Number(res.data.recommended.true)))))
      })
  }

  function handleStarClick(num) {
    if (num === starFilter) {
      setStarFilter(0)
    } else {
      setStarFilter(num)
    }
  }


  return (
    <>
      <div id="reviews" className='sectionTitle pt-5'>
        {`RATINGS & REVIEWS`}
      </div>
      {productInfo &&
      <div className='reviews pt-3'>
        <div className='reviews-left'>
          {productMeta &&
          <StarColumn
            rating={props.rating}
            productInfo={productInfo}
            productMeta={productMeta}
            starRating={utils.starRating}
            percentage={percentage}
            starFilter={starFilter}
            handleStarClick={handleStarClick}
          />
          }
        </div>
        <div className='reviews-right'>
          <ReviewColumn
            rating={props.rating}
            productInfo={productInfo}
            starRating={utils.starRating}
            refresh={fetchReviews}
            selected={props.selected}
            productMeta={productMeta}
            starFilter={starFilter}
          />
        </div>
      </div>
      }
    </>
  )
}