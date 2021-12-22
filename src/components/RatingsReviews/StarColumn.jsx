import { empty } from "prelude-ls"
import React from "react"

export default function StarColumn(props) {

  return (
    <div className='ratingAmount'>
      <div className='reviewRating'>
        {props.rating}
      </div>
      <div>
        {props.starRating(props.rating)}
      </div>
    </div>
  )
}