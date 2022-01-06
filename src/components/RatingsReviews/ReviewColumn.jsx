import React from 'react';
import Review from './Review';
import AddReview from './AddReview';
import { Alert, Snackbar } from '@mui/material';

export default function ReviewColumn(props) {
  const [reviewCount, setReviewCount] = React.useState(2);
  const [moreReviews, setMoreReviews] = React.useState(true);
  const [addReview, setAddReview] = React.useState(false);
  const [sort, setSort] = React.useState('relevance');
  const [search, setSearch] = React.useState('');
  const [snackMessage, setSnackMessage] = React.useState('');
  const [showSnack, setShowSnack] = React.useState(false);

  let compare;
  let reviews = [];

  if (sort === 'relevance') {
    compare = function (a, b) {
      if (a.helpful < b.helpful) {
        return -1;
      }
      if (a.helpful > b.helpful) {
        return 1;
      }
      return 0;
    };
  }
  if (sort === 'helpful') {
    compare = function (a, b) {
      if (a.helpful < b.helpful) {
        return -1;
      }
      if (a.helpful > b.helpful) {
        return 1;
      }
      return 0;
    };
  }
  if (sort === 'newest') {
    compare = function (a, b) {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
      return 0;
    };
  }
  if (props.starFilter.length > 0) {
    reviews = props.productInfo.results.filter((review) =>
      props.starFilter.includes(review.rating)
    );
  } else {
    reviews = props.productInfo.results;
  }

  if (search.length >= 3) {
    reviews = reviews.filter((review) =>
      review.body.toLowerCase().includes(search.toLowerCase())
    );
  }

  let filteredCount = reviews.length;

  if (compare) {
    reviews = reviews.sort(compare).slice(0, reviewCount);
  } else {
    reviews = reviews.slice(0, reviewCount);
  }

  const reviewElements = reviews.map((review) => (
    <Review
      review={review}
      key={review.review_id}
      starRating={props.starRating}
      starRatingWhite={props.starRatingWhite}
      reviewCount={reviewCount}
      setReviewCount={setReviewCount}
      refresh={props.refresh}
      darkTheme={props.darkTheme}
      setSnackMessage={setSnackMessage}
      setShowSnack={setShowSnack}
    />
  ));

  React.useEffect(() => {
    reviewCheck();
  }, [reviews]);

  function reviewCheck() {
    if (reviewCount >= filteredCount) {
      setMoreReviews(false);
    }
    if (reviewCount < filteredCount) {
      setMoreReviews(true);
    }
  }

  function addReviews() {
    if (reviewCount < props.productInfo.results.length) {
      setReviewCount(reviewCount + 2);
    }
  }

  function scrollCheck(e) {
    if (
      e.target.scrollHeight - e.target.scrollTop ===
      e.target.clientHeight + 1
    ) {
      addReviews();
    }
  }

  function handleChange(e) {
    setSort(e.target.value);
    props.refresh();
  }

  function handleClose() {
    setShowSnack(false);
  }

  const searchStyle = {
    borderColor: props.darkTheme ? 'white' : 'black',
    color: props.darkTheme ? 'white' : 'black',
  };

  const sortStyle = {
    color: props.darkTheme ? 'white' : 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  };

  const buttonStyle = props.darkTheme
    ? 'btn btn-outline-light ms-2'
    : 'btn btn-outline-dark ms-2';

  return (
    <div>
      <Snackbar
        open={showSnack}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='info'>
          {snackMessage}
        </Alert>
      </Snackbar>
      <div className='h4'>
        {filteredCount} Reviews, sorted by
        <select
          value={sort}
          onChange={handleChange}
          className='reviewSort'
          style={sortStyle}
        >
          <option>newest</option>
          <option>relevance</option>
          <option>helpful</option>
        </select>
      </div>
      <input
        placeholder='Search Reviews...'
        onChange={(e) => setSearch(e.target.value)}
        className='mb-3 mt-2 w-100 searchBar'
        style={searchStyle}
      ></input>
      <div className='reviewColumn' onScroll={scrollCheck}>
        {reviewElements}
      </div>
      <div className='reviewButtons pt-3 container'>
        {moreReviews && (
          <button className={buttonStyle} onClick={addReviews}>
            More Reviews
          </button>
        )}
        <button
          className={buttonStyle}
          data-toggle='modal'
          data-target='#addReview'
          onClick={() => setAddReview(true)}
        >
          + Add a Review
        </button>
      </div>
      {addReview && (
        <AddReview
          productInfo={props.productInfo}
          productMeta={props.productMeta}
          selected={props.selected}
          refresh={props.refresh}
          darkTheme={props.darkTheme}
          setShowModal={setAddReview}
        />
      )}
    </div>
  );
}
