import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RatingsAndReviews from './RatingsReviews/RatingsAndReviews'

export default function App(props) {
  return (
      <>
        <h1>
          Hello!
        </h1>
        <button type="button" className="btn btn-primary">
          This is a bootstrap button
        </button>
        <RatingsAndReviews />
      </>
  )
}