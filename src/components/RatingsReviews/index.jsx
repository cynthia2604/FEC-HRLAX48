import React from 'react'
import axios from 'axios'
import Options from '../../config'
import StarColumn from './StarColumn'
import ReviewColumn from './ReviewColumn'

export default function RatingsAndReviews(props) {

  const [productInfo, setProductInfo] = React.useState()
  const [percentage, setPercentage] = React.useState(100)

  React.useEffect(() => {
    axios.get(`${Options.URL}/reviews/?product_id=${props.selected.id}&count=10`, {
      headers: {
        Authorization: Options.TOKEN
      }
    })
      .then(res => {
        setProductInfo(res.data)
      })
  }, [props.selected])

  return (
    <>
      <div className='sectionTitle'>
        {`RATINGS & REVIEWS`}
      </div>
      {productInfo &&
      <div className='reviews'>
        <div className='reviews-left'>
          <StarColumn rating={rating} productInfo={productInfo} starRating={starRating}/>
        </div>
        <div className='reviews-right'>
          <ReviewColumn rating={rating} productInfo={productInfo} starRating={starRating}/>
        </div>
      </div>
      }
    </>
  )
}