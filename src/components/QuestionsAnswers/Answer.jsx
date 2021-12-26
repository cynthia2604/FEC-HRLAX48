import React from "react"
import moment from "moment"
import axios from "axios"

export default function Answer(props) {

  const [marked, setMarked] = React.useState(false)
  const [helpful, setHelpful] = React.useState(props.answer.helpfulness)

  function markAnswerHelpful(id) {
    if (!marked) {
      axios.put(`${Options.URL}/qa/answers/${id}/helpful`, null, {
        headers: {
          Authorization: Options.TOKEN
        }
      })
        .then(() => {
          setMarked(true)
          setHelpful(helpful + 1)
        })
    }
  }


  return (
    <div>
      <div className="answerBody">
        {props.answer.body}
      </div>
      <div className="d-flex reviewHelpful pt-2 pb-3">
        <div className="answerAuthor">
          by {props.answer.answerer_name === 'Seller' ? <b>{props.answer.answerer_name}</b> : props.answer.answerer_name}, {moment(props.answer.date).format('MMMM D, YYYY')}
        </div>
        <div className="answerBottomDivider px-2">
          |
        </div>
        <div>
          Helpful?
        </div>
        <div className="reviewBodyShowMore ps-2 pe-1">
          Yes
        </div>
        <div>
          ({props.answer.helpfulness})
        </div>
        <div className="answerBottomDivider px-2">
          |
        </div>
        <div className="reviewBodyShowMore">
          Report
        </div>
      </div>
    </div>
  )
}