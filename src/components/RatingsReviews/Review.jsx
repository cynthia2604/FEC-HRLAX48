import React from "react"
import moment from "moment"
import axios from "axios"
import Options from "../../config"
import ReviewPhoto from "./ReviewPhoto"

export default function Review(props) {

  const [showMore, setShowMore] = React.useState(250)
  const [marked, setMarked] = React.useState(false)
  const [helpful, setHelpful] = React.useState(props.review.helpfulness)

  function recommended() {
    if (props.review.recommend) {
      return (
        <div className="reviewRecommended">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill={props.darkTheme ? "white" : "black"} className="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
          <span className="ps-2">
            I recommend this product
          </span>
        </div>
      )
    }
  }

  function markHelpful() {
    if (!marked) {
      axios.put(`${Options.URL}/reviews/${props.review.review_id}/helpful`, null, {
        headers: {
          Authorization: Options.TOKEN
        }
      })
        .then(() => {
          setMarked(true)
          setHelpful(helpful + 1)
        })
    }
  }

  function reportReview() {
    axios.put(`${Options.URL}/reviews/${props.review.review_id}/report`, null, {
      headers: {
        Authorization: Options.TOKEN
      }
    })
      .then(() => {
        props.refresh()
        alert('Thank you for your report. You shouldn\'t see this review anymore')
      })
  }


  function imageModal(imageURL) {
    // Doesnt do anything yet because we don't actually have images in reviews...
  }

  const authorStyle = {
    color: props.darkTheme ? "rgb(200, 200, 200)" : "rgb(100, 100, 100)"
  }

  return (
    <>
    <div className='review'>
      <div className='reviewTop'>
        <div className="reviewStars">
          {props.darkTheme ? props.starRatingWhite(props.review.rating) : props.starRating(props.review.rating)}
        </div>
        <div className="reviewAuthor" style={authorStyle}>
          {props.review.reviewer_name} - {moment(props.review.date).format('MMMM D, YYYY')}
        </div>
      </div>
      <div className="reviewTitle">
        {props.review.summary}
      </div>
      <div className="reviewBody">
        {props.review.body.slice(0, showMore)}
        {showMore === 250 && props.review.body.length > 250 &&
        <p style={authorStyle} className="cP reviewBodyShowMore pt-2" onClick={() => setShowMore(999)}>Show More...</p>
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
          <ReviewPhoto key={photo.id} photo={photo} darkTheme={props.darkTheme}/>
        ))}
      </div>
      }
      <div className="d-flex align-items-center reviewHelpful pt-3" style={authorStyle}>
        <div>
          Was this review helpful?
        </div>
        <div className="cP reviewBodyShowMore ps-2 pe-1" onClick={markHelpful}>
          Yes
        </div>
        <div>
          ({helpful})
        </div>
        <div className="px-2">
          |
        </div>
        <div className="cP reviewBodyShowMore" onClick={reportReview}>
          Report
        </div>
      </div>
    </div>
    <div className='reviewDivider' style={{backgroundColor: props.darkTheme ? 'rgb(150, 150, 150)' : 'rgb(100, 100, 100)'}}></div>
    </>
  )
}