import React from "react"
import moment from "moment"

export default function Review(props) {
  console.log(moment(props.review.date).format('MMM D, YYYY'))
  return (
    <div className='review'>
      <div className='reviewTop'>
        <div className="reviewStars">
          {props.starRating(props.review.rating)}
        </div>
        <div>
          {props.review.reviewer_name}, {moment(props.review.date).format('MMMM D, YYYY')}
        </div>
      </div>
      <div className='reviewDivider'></div>
    </div>
  )
}