import React from "react"
import Options from "../../config"
import axios from "axios"
import QAElement from "./QAElement"

export default function QuestionsAnswers(props) {

  const [productQuestions, setProductQuestions] = React.useState([])
  const [questionCount, setQuestionCount] = React.useState(4)
  const [search, setSearch] = React.useState('')

  let questions = []

  React.useEffect(() => {
    fetchQuestions()
  }, [props.selected])

  function fetchQuestions() {
    axios.get(`${Options.URL}/qa/questions/?product_id=${props.selected.id}&count=999`, {
      headers: {
        Authorization: Options.TOKEN
      }
    })
      .then(res => setProductQuestions(res.data.results))
  }

  if (search.length >= 3) {
    questions = productQuestions.filter(question => question.question_body.toLowerCase().includes(search.toLowerCase()))
  } else {
    questions = productQuestions
  }


  const QAElements = questions.slice(0, questionCount).map(element => (
    <QAElement
      element={element}
      key={element.question_id}
    />
  ))


  return (
    <>
      <div className='sectionTitle pt-5'>
        {`QUESTIONS & ANSWERS`}
      </div>
      <div className="pt-3">
        <input className="w-100 searchBar" onChange={e => setSearch(e.target.value)} value={search} placeholder="Have a question? Search for answers..."></input>
      </div>
      <div>
        {QAElements}
      </div>
    </>
  )
}