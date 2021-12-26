import React from "react"
import moment from "moment"
import axios from "axios"
import Options from "../../config"
import Answer from "./Answer"

export default function QAElement(props) {

  const [marked, setMarked] = React.useState(false)
  const [helpful, setHelpful] = React.useState(props.element.question_helpfulness)

  function markHelpful() {
    if (!marked) {
      axios.put(`${Options.URL}/qa/questions/${props.element.question_id}/helpful`, null, {
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

  function reportQuestion() {
    axios.put(`${Options.URL}/qa/questions/${props.element.question_id}/report`, null, {
      headers: {
        Authorization: Options.TOKEN
      }
    })
      .then(() => {
        props.refresh()
        alert('Thank you for your report. You shouldn\'t see this question anymore')
      })
  }


  function imageModal(imageURL) {
    // Doesnt do anything yet because we don't actually have images in reviews...
  }

  return (
    <div>
      <div className="questionBody d-flex align-items-end">
        <div className="qaLeft">
          <b>Q:</b>
        </div>
        <div className="me-auto mw-75">
          <b>{props.element.question_body}</b>
        </div>
        <div className="d-flex align-items-center reviewHelpful pt-3">
          <div>
            Helpful?
          </div>
          <div className="cP reviewBodyShowMore ps-2 pe-1" onClick={markHelpful}>
            Yes
          </div>
          <div>
            ({helpful})
          </div>
          <div className="px-2">
            |
          </div>
          <div className="cP reviewBodyShowMore" onClick={() => {}}>
            Add Answer
          </div>
        </div>
      </div>
      <div className="questionAnswers d-flex mt-2">
        <div className="qaLeft">
          <b>A:</b>
        </div>
        <div className="mw-75">
          {Object.keys(props.element.answers).slice(0, 2).map((answer, i) => (
            <Answer answer={props.element.answers[answer]} key={i} refresh={props.refresh}/>
          ))}
        </div>
      </div>
    </div>
  )
}