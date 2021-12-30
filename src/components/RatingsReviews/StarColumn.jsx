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
          {props.darkTheme ? props.starRatingWhite(props.rating) : props.starRating(props.rating)}
        </div>
      </div>
      <div>
        {props.percentage || 100}% of reviews recommend this product
      </div>
      <div className="pt-2 w-100">
        <div className="cP w-100" onClick={() => props.handleStarClick(5)}>
          <label htmlFor="5star" className="pe-1">5 Stars:</label>
          <progress className="" id="5star" value={Number(props.productMeta.ratings["5"]) || 0} max={total}></progress> ({props.productMeta.ratings["5"] || 0})
        </div>
        <div className="cP w-100" onClick={() => props.handleStarClick(4)}>
          <label htmlFor="4star" className="pe-1">4 Stars:</label>
          <progress className="" id="4star" value={Number(props.productMeta.ratings["4"]) || 0} max={total}></progress> ({props.productMeta.ratings["4"] || 0})
        </div>
        <div className="cP w-100" onClick={() => props.handleStarClick(3)}>
          <label htmlFor="3star" className="pe-1">3 Stars:</label>
          <progress className="" id="3star" value={Number(props.productMeta.ratings["3"]) || 0} max={total}></progress> ({props.productMeta.ratings["3"] || 0})
        </div>
        <div className="cP w-100" onClick={() => props.handleStarClick(2)}>
          <label htmlFor="2star" className="pe-1">2 Stars:</label>
          <progress className="" id="2star" value={Number(props.productMeta.ratings["2"]) || 0} max={total}></progress> ({props.productMeta.ratings["2"] || 0})
        </div>
        <div className="cP w-100" onClick={() => props.handleStarClick(1)}>
          <label htmlFor="1star" className="pe-1">1 Stars:</label>
          <progress className="" id="1star" value={Number(props.productMeta.ratings["1"]) || 0} max={total}></progress> ({props.productMeta.ratings["1"] || 0})
        </div>
        {props.starFilter.length > 0 &&
        <>
          <div className="text-center">
            Currently filtering for {props.starFilter.join(', ')} Star reviews.
          </div>
          <div className="text-center cP" onClick={() => props.setStarFilter([])}>
            Remove Star Filters
          </div>
        </>
        }
        <div className="mt-4">
          {props.productMeta.characteristics.Size &&
          <>
            <div className="ratingBreakdownText m-0 mt-2">
              <b>Size</b>
            </div>
            <input type="range" className="w-100" value={props.productMeta.characteristics.Size.value || 0} max={5} disabled/>
            <div className="row ratingBreakdownText">
              <div className="col">
                Size Too Small
              </div>
              <div className="col text-center">
                Perfect
              </div>
              <div className="col text-end">
                Size Too Big
              </div>
            </div>
          </>
          }
          {props.productMeta.characteristics.Width &&
          <>
            <div className="ratingBreakdownText m-0 mt-2">
              <b>Width</b>
            </div>
            <input type="range" className="w-100" value={props.productMeta.characteristics.Width.value || 0} max={5} disabled/>
            <div className="row ratingBreakdownText">
              <div className="col">
                Too Narrow
              </div>
              <div className="col text-center">
                Perfect
              </div>
              <div className="col text-end">
                Too Wide
              </div>
            </div>
            </>
            }
            {props.productMeta.characteristics.Comfort &&
            <>
            <div className="ratingBreakdownText m-0 mt-2">
              <b>Comfort</b>
            </div>
            <input type="range" className="w-100" value={props.productMeta.characteristics.Comfort.value || 0} max={5} disabled/>
            <div className="row ratingBreakdownText">
              <div className="col">
                Uncomfortable
              </div>
              <div className="col text-center">
                Ok
              </div>
              <div className="col text-end">
                Perfect
              </div>
            </div>
          </>
          }
          {props.productMeta.characteristics.Quality &&
          <>
            <div className="ratingBreakdownText m-0 mt-2">
              <b>Quality</b>
            </div>
            <input type="range" className="w-100" value={props.productMeta.characteristics.Quality.value || 0} max={5} disabled/>
            <div className="row ratingBreakdownText">
              <div className="col">
                Poor
              </div>
              <div className="col text-center">
                As Expected
              </div>
              <div className="col text-end">
                Perfect
              </div>
            </div>
          </>
          }
          {props.productMeta.characteristics.Length &&
          <>
            <div className="ratingBreakdownText m-0 mt-2">
              <b>Length</b>
            </div>
            <input type="range" className="w-100" value={props.productMeta.characteristics.Length.value || 0} max={5} disabled/>
            <div className="row ratingBreakdownText">
              <div className="col">
                Short
              </div>
              <div className="col text-center">
                Perfect
              </div>
              <div className="col text-end">
                Long
              </div>
            </div>
          </>
          }
          {props.productMeta.characteristics.Fit &&
          <>
            <div className="ratingBreakdownText m-0 mt-2">
              <b>Fit</b>
            </div>
            <input type="range" className="w-100" value={props.productMeta.characteristics.Fit.value || 0} max={5} disabled/>
            <div className="row ratingBreakdownText">
              <div className="col">
                Tight
              </div>
              <div className="col text-center">
                Perfect
              </div>
              <div className="col text-end">
                Loose
              </div>
            </div>
          </>
          }
        </div>
      </div>
    </>
  )
}