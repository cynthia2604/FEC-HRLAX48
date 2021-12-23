import React from "react"
import StarEmpty from '../assets/StarEmpty.png'
import StarQuarter from '../assets/StarQuarter.png'
import StarHalf from '../assets/StarHalf.png'
import StarThreeQuarters from '../assets/StarThreeQuarters.png'
import StarFilled from '../assets/StarFilled.png'

const utils = {

  StarEmpty: <img src={StarEmpty} width="16px" height="16px"></img>,
  StarQuarter: <img src={StarQuarter} width="16px" height="16px"></img>,
  StarHalf: <img src={StarHalf} width="16px" height="16px"></img>,
  StarThreeQuarters: <img src={StarThreeQuarters} width="16px" height="16px"></img>,
  StarFilled: <img src={StarFilled} width="16px" height="16px"></img>,

  starRating: (rating) => {
    if (!rating) {
      return (
        <div>
          {utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 1) {
      return (
        <div>
          {utils.StarFilled}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 2) {
      return (
        <div>
          {utils.StarFilled}{utils.StarFilled}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 3) {
      return (
        <div>
          {utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarEmpty}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 4) {
      return (
        <div>
          {utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 5) {
      return (
        <div>
          {utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarFilled}
        </div>
      )
    } else if (rating === .5) {
      return (
        <div>
          {utils.StarHalf}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 1.5) {
      return (
        <div>
          {utils.StarFilled}{utils.StarHalf}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 2.5) {
      return (
        <div>
          {utils.StarFilled}{utils.StarFilled}{utils.StarHalf}{utils.StarEmpty}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 3.5) {
      return (
        <div>
          {utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarHalf}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 4.5) {
      return (
        <div>
          {utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarHalf}
        </div>
      )
    } else if (rating === .25) {
      return (
        <div>
          {utils.StarQuarter}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}
        </div>
      )
    } else if (rating === .75) {
      return (
        <div>
          {utils.StarThreeQuarters}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 1.25) {
      return (
        <div>
          {utils.StarFilled}{utils.StarQuarter}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 1.75) {
      return (
        <div>
          {utils.StarFilled}{utils.StarThreeQuarters}{utils.StarEmpty}{utils.StarEmpty}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 2.25) {
      return (
        <div>
          {utils.StarFilled}{utils.StarFilled}{utils.StarQuarter}{utils.StarEmpty}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 2.75) {
      return (
        <div>
          {utils.StarFilled}{utils.StarFilled}{utils.StarThreeQuarters}{utils.StarEmpty}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 3.25) {
      return (
        <div>
          {utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarQuarter}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 3.75) {
      return (
        <div>
          {utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarThreeQuarters}{utils.StarEmpty}
        </div>
      )
    } else if (rating === 4.25) {
      return (
        <div>
          {utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarQuarter}
        </div>
      )
    } else if (rating === 4.75) {
      return (
        <div>
          {utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarFilled}{utils.StarThreeQuarters}
        </div>
      )
    }
  }
}

export default utils;