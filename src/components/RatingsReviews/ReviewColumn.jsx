import React from "react"
import Review from "./Review"
import AddReview from "./AddReview"

export default function ReviewColumn(props) {

  const [reviewCount, setReviewCount] = React.useState(2)
  const [moreReviews, setMoreReviews] = React.useState(true)
  const [addReview, setAddReview] = React.useState(false)
  const [sort, setSort] = React.useState('relevance')
  const [search, setSearch] = React.useState('')


  let compare
  let reviews = []

  if (sort === 'relevance') {
    compare = function(a, b) {
      if (a.helpful < b.helpful) {
        return -1;
      }
      if (a.helpful > b.helpful) {
        return 1;
      }
      return 0;
    }
  }
  if (sort === 'helpful') {
    compare = function(a, b) {
      if (a.helpful < b.helpful) {
        return -1;
      }
      if (a.helpful > b.helpful) {
        return 1;
      }
      return 0;
    }
  }
  if (sort === 'newest') {
    compare = function(a, b) {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
      return 0;
    }
  }
  if (props.starFilter.length > 0) {
    reviews = props.productInfo.results.filter(review => props.starFilter.includes(review.rating))
  } else {
    reviews = props.productInfo.results
  }

  if (search.length >= 3) {
    reviews = reviews.filter(review => review.body.toLowerCase().includes(search.toLowerCase()))
  }

  let filteredCount = reviews.length

  if (compare) {
    reviews = reviews.sort(compare).slice(0, reviewCount)
  } else {
    reviews = reviews.slice(0, reviewCount)
  }


  const reviewElements = reviews.map(review => (
    <Review
    review={review}
    key={review.review_id}
      starRating={props.starRating}
      reviewCount={reviewCount}
      setReviewCount={setReviewCount}
      refresh={props.refresh}
      darkTheme={props.darkTheme}
    />
  ))

  React.useEffect(() => {
    reviewCheck()
  }, [reviews])

  function reviewCheck() {
    if (reviewCount >= filteredCount) {
      setMoreReviews(false)
    }
    if (reviewCount < filteredCount) {
      setMoreReviews(true)
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

  function handleChange(e) {
    setSort(e.target.value)
    props.refresh()
  }

  return (
    <div>
      <div className="h4">
      {filteredCount} Reviews, sorted by
      <select value={sort} onChange={handleChange} className="reviewSort">
        <option>newest</option>
        <option>relevance</option>
        <option>helpful</option>
      </select>
      </div>
      <input placeholder="Search Reviews..." onChange={e => setSearch(e.target.value)} className="mb-3 mt-2 w-100 searchBar"></input>
      <div className="reviewColumn" onScroll={scrollCheck}>
        {reviewElements}
      </div>
      <div className="reviewButtons pt-3 container">
        {moreReviews &&
        <button className="btn btn-lg btn-outline-dark" onClick={addReviews}>More Reviews</button>
        }
        <button className="btn btn-lg btn-outline-dark" data-toggle="modal" data-target="#addReview" onClick={() => setAddReview(true)}>+ Add a Review</button>
      </div>
      {addReview &&
      <AddReview
        productInfo={props.productInfo}
        productMeta={props.productMeta}
        selected={props.selected}
        refresh={props.refresh}
        darkTheme={props.darkTheme}
      />
      }
    </div>
  )
}