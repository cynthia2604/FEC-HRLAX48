import React from "react"
import StarEmpty from '../assets/StarEmpty.png'
import StarQuarter from '../assets/StarQuarter.png'
import StarHalf from '../assets/StarHalf.png'
import StarThreeQuarters from '../assets/StarThreeQuarters.png'
import StarFilled from '../assets/StarFilled.png'
import StarEmptyWhite from '../assets/StarEmptyWhite.png'
import StarQuarterWhite from '../assets/StarQuarterWhite.png'
import StarHalfWhite from '../assets/StarHalfWhite.png'
import StarThreeQuartersWhite from '../assets/StarThreeQuartersWhite.png'
import StarFilledWhite from '../assets/StarFilledWhite.png'

const utils = {

  StarEmpty: <img src={StarEmpty} width="20px" height="20px"></img>,
  StarQuarter: <img src={StarQuarter} width="20px" height="20px"></img>,
  StarHalf: <img src={StarHalf} width="20px" height="20px"></img>,
  StarThreeQuarters: <img src={StarThreeQuarters} width="20px" height="20px"></img>,
  StarFilled: <img src={StarFilled} width="20px" height="20px"></img>,
  StarEmptyWhite: <img src={StarEmptyWhite} width="20px" height="20px"></img>,
  StarQuarterWhite: <img src={StarQuarterWhite} width="20px" height="20px"></img>,
  StarHalfWhite: <img src={StarHalfWhite} width="20px" height="20px"></img>,
  StarThreeQuartersWhite: <img src={StarThreeQuartersWhite} width="20px" height="20px"></img>,
  StarFilledWhite: <img src={StarFilledWhite} width="20px" height="20px"></img>,

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
  },

  starRatingWhite: (rating) => {
    if (!rating) {
      return (
        <div>
          {utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 1) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 2) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 3) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 4) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 5) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}
        </div>
      )
    } else if (rating === .5) {
      return (
        <div>
          {utils.StarHalfWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 1.5) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarHalfWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 2.5) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarHalfWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 3.5) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarHalfWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 4.5) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarHalfWhite}
        </div>
      )
    } else if (rating === .25) {
      return (
        <div>
          {utils.StarQuarterWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === .75) {
      return (
        <div>
          {utils.StarThreeQuarters}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 1.25) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarQuarterWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 1.75) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarThreeQuarters}{utils.StarEmptyWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 2.25) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarQuarterWhite}{utils.StarEmptyWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 2.75) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarThreeQuarters}{utils.StarEmptyWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 3.25) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarQuarterWhite}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 3.75) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarThreeQuarters}{utils.StarEmptyWhite}
        </div>
      )
    } else if (rating === 4.25) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarQuarterWhite}
        </div>
      )
    } else if (rating === 4.75) {
      return (
        <div>
          {utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarFilledWhite}{utils.StarThreeQuarters}
        </div>
      )
    }
  }
}

export default utils;
