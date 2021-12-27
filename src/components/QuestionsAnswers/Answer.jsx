import React from "react"
import moment from "moment"
import axios from "axios"
import Options from "../../config"

export default function Answer(props) {

  const [marked, setMarked] = React.useState(false)
  const [helpful, setHelpful] = React.useState(props.answer.helpfulness)

  function markAnswerHelpful() {
    if (!marked) {
      axios.put(`${Options.URL}/qa/answers/${props.answer.id}/helpful`, null, {
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

  function reportAnswer() {
    axios.put(`${Options.URL}/qa/answers/${props.answer.id}/report`, null, {
      headers: {
        Authorization: Options.TOKEN
      }
    })
      .then(() => {
        props.refresh()
        alert('Thank you for your report. You shouldn\'t see this answer anymore')
      })
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
        <div className="reviewBodyShowMore ps-2 pe-1 cP" onClick={markAnswerHelpful}>
          Yes
        </div>
        <div>
          ({helpful})
        </div>
        <div className="answerBottomDivider px-2">
          |
        </div>
        <div className="reviewBodyShowMore cP" onClick={reportAnswer}>
          Report
        </div>
      </div>
    </div>
  )
}