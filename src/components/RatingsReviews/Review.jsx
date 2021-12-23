import React from "react"
import moment from "moment"

export default function Review(props) {

  const [showMore, setShowMore] = React.useState(250)

  function recommended() {
    if (props.review.recommend) {
      return (
        <div className="reviewRecommended">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" className="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
          <span className="ps-2">
            I recommend this product
          </span>
        </div>
      )
    }
  }

  function imageModal(imageURL) {
    // Doesnt do anything yet because we don't actually have images in reviews...
  }

  console.log(props.review)

  return (
    <div className='review'>
      <div className='reviewTop'>
        <div className="reviewStars">
          {props.starRating(props.review.rating)}
        </div>
        <div className="reviewAuthor">
          {props.review.reviewer_name} - {moment(props.review.date).format('MMMM D, YYYY')}
        </div>
      </div>
      <div className="reviewTitle">
        {props.review.summary}
      </div>
      <div className="reviewBody">
        {props.review.body.slice(0, showMore)}
        {showMore === 250 && props.review.body.length > 250 &&
        <p className="cP reviewBodyShowMore pt-2" onClick={() => setShowMore(999)}>Show More...</p>
        }
      </div>
      {recommended()}
      {props.review.response &&
      <div className="reviewResponse">
        <div>
          <strong>Response From Seller:</strong>
        </div>
        <div>
          {props.review.response}
        </div>
      </div>
      }
      {props.review.photos.length > 0 &&
      <div className="d-flex pt-3">
        {props.review.photos.map(photo => (
          <div key={photo.id} className="cP">
            <img src={photo.url} alt="Reviewer Photo" height="25px" onClick={() => imageModal(photo.url)}></img>
          </div>
        ))}
      </div>
      }
      <div className="d-flex align-items-center reviewHelpful pt-3">
        <div>
          Was this review helpful?
        </div>
        <div className="cP reviewBodyShowMore ps-2 pe-1">
          Yes
        </div>
        <div>
          ({props.review.helpfulness})
        </div>
        <div className="px-2">
          |
        </div>
        <div className="cP reviewBodyShowMore">
          Report
        </div>
      </div>
      <div className='reviewDivider'></div>
    </div>
  )
}