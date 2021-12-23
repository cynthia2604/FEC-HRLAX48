import React from "react"
import Overview from "./Overview"
import RatingsAndReviews from "./RatingsReviews"
import RelatedItems from "./RelatedItems"
import axios from "axios"
import Options from "../config"

export default function Detail(props) {
  const [rating, setRating] = React.useState(5)

  React.useEffect(() => {
    axios.get(`${Options.URL}/reviews/?product_id=${props.selected.id}&count=99`, {
      headers: {
        Authorization: Options.TOKEN
      }
    })
      .then(res => {
        function roundHalf(num) {
          return Math.round(num*2)/2
        }
        let average = 0;
        for (let i = 0; i < res.data.results.length; i++) {
          average += res.data.results[i].rating
        }
        average = average / res.data.results.length
        setRating(roundHalf(average))
      })
  }, [props.selected])

  return (
    <div>
      <div onClick={() => props.setView('catalogue')}>GO TO CATALOGUE</div>
      <Overview selected={props.selected} rating={rating}/>
      <RelatedItems
        products={props.products}
        selected ={props.selected}
        setSaved={props.setSaved}
        outfits={props.outfits}
        />
      <RatingsAndReviews selected={props.selected} rating={rating} />
    </div>
  )
}