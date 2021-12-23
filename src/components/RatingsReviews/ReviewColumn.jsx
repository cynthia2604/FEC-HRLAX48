import React from "react"
import Review from "./Review"

export default function ReviewColumn(props) {

  const [reviewCount, setReviewCount] = React.useState(2)
  const [moreReviews, setMoreReviews] = React.useState(true)

  const reviews = props.productInfo.results.slice(0, reviewCount).map(review => (
    <Review
      review={review}
      key={review.review_id}
      starRating={props.starRating}
      reviewCount={reviewCount}
      setReviewCount={setReviewCount}
      refresh={props.refresh}
    />
  ))

  React.useEffect(() => {
    reviewCheck()
  }, [reviews])

  function reviewCheck() {
    if (reviewCount >= props.productInfo.results.length) {
      setMoreReviews(false)
    }
  }

  function addReviews() {
    if (reviewCount < props.productInfo.results.length) {
      setReviewCount(reviewCount + 2)
    }
  }

  function scrollCheck(e) {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      addReviews()
    }
  }

  return (
    <div>
      <div className="reviewColumn" onScroll={scrollCheck}>
        {reviews}
      </div>
      <div className="reviewButtons pt-3 container">
        {moreReviews &&
        <button className="btn btn-lg btn-outline-dark" onClick={addReviews}>More Reviews</button>
        }
        <button className="btn btn-lg btn-outline-dark">+ Add a Review</button>
      </div>
    </div>
  )
}