import React from "react"
import moment from "moment"
import axios from "axios"
import Options from "../../config"

export default function QAElement(props) {

  const [showMore, setShowMore] = React.useState(250)
  const [marked, setMarked] = React.useState(false)
  const [helpful, setHelpful] = React.useState(props.element.question_helpfulness)

  function recommended() {
    if (props.review.recommend) {
      return (
        <div className="reviewRecommended">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" className="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
          <span className="ps-2">
            I recommend this product
          </span>
        </div>
      )
    }
  }

  function markQuestionHelpful() {
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
          <div className="cP reviewBodyShowMore ps-2 pe-1" onClick={markQuestionHelpful}>
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
            <div key={i}>
              <div className="answerBody">
                {props.element.answers[answer].body}
              </div>
              <div className="d-flex reviewHelpful py-3">
                <div className="answerAuthor">
                  by {props.element.answers[answer].answerer_name}, {moment(props.element.answers[answer].date).format('MMMM D, YYYY')}
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
                  (69)
                </div>
                <div className="answerBottomDivider px-2">
                  |
                </div>
                <div className="reviewBodyShowMore">
                  Report
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}