import React from "react"
import RatingsAndReviews from "./RatingsReviews"
import Overview from "./Overview"
import RelatedItems from "./RelatedItems"
import axios from "axios"
import Options from "../config"

export default function Detail(props) {
  const [rating, setRating] = React.useState(5)

  React.useEffect(() => {
    axios.get(`${Options.URL}/reviews/?product_id=${props.selected.id}&count=10`, {
      headers: {
        Authorization: Options.TOKEN
      }
    })
      .then(res => {
        function roundHalf(num) {
          return Math.round(num*2)/2;
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
      <div onClick={() => props.setView("catalogue")}>GO TO CATALOGUE</div>
      <Overview selected={props.selected} />
      <RelatedItems products={props.products} selected ={props.selected} rating={rating}/>
      <RatingsAndReviews selected={props.selected}/>
    </div>
  )
}