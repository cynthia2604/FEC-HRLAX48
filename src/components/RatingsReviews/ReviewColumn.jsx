import React from "react"
import Review from "./Review"

export default function ReviewColumn(props) {

  const [reviewCount, setReviewCount] = React.useState(2)

  const reviews = props.productInfo.results.slice(0, reviewCount).map(review => (
    <Review
    review={review}
    key={review.review_id}
    starRating={props.starRating}
    reviewCount={reviewCount}
    setReviewCount={setReviewCount}
    />
  ))

  return (
    <div>
      {reviews}
    </div>
  )
}