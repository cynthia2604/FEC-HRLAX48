import React from "react"

export default function StarColumn(props) {

  let total = Object.values(props.productMeta.ratings).map(Number).reduce((sum, a) => sum + a, 0)


  return (
    <>
      <div className='ratingAmount'>
        <div className='reviewRating'>
          {props.rating.toFixed(1)}
        </div>
        <div>
          {props.starRating(props.rating)}
        </div>
      </div>
      <div>
        {props.percentage}% of reviews recommend this product
      </div>
      <div className="pt-2">
        <div className="cP" onClick={() => props.handleStarClick(5)}>
          <label htmlFor="5star" className="pe-1">5 Stars:</label>
          <progress className="" id="5star" value={Number(props.productMeta.ratings["5"]) || 0} max={total}></progress> ({props.productMeta.ratings["5"] || 0})
        </div>
        <div className="cP" onClick={() => props.handleStarClick(4)}>
          <label htmlFor="4star" className="pe-1">4 Stars:</label>
          <progress className="" id="4star" value={Number(props.productMeta.ratings["4"]) || 0} max={total}></progress> ({props.productMeta.ratings["4"] || 0})
        </div>
        <div className="cP" onClick={() => props.handleStarClick(3)}>
          <label htmlFor="3star" className="pe-1">3 Stars:</label>
          <progress className="" id="3star" value={Number(props.productMeta.ratings["3"]) || 0} max={total}></progress> ({props.productMeta.ratings["3"] || 0})
        </div>
        <div className="cP" onClick={() => props.handleStarClick(2)}>
          <label htmlFor="2star" className="pe-1">2 Stars:</label>
          <progress className="" id="2star" value={Number(props.productMeta.ratings["2"]) || 0} max={total}></progress> ({props.productMeta.ratings["2"] || 0})
        </div>
        <div className="cP" onClick={() => props.handleStarClick(1)}>
          <label htmlFor="1star" className="pe-1">1 Stars:</label>
          <progress className="" id="1star" value={Number(props.productMeta.ratings["1"]) || 0} max={total}></progress> ({props.productMeta.ratings["1"] || 0})
        </div>
        {props.starFilter.length > 0 &&
        <>
          <div className="text-center">
            Currently filtering for {props.starFilter.join(', ')} Star reviews.
          </div>
          <div className="text-center cP" onClick={() => props.setStarFilter([])}>
            Remove All Filters
          </div>
        </>
        }
      </div>
    </>
  )
}