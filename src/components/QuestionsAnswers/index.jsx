import React from "react"
import Options from "../../config"
import axios from "axios"
import QAElement from "./QAElement"
import AddQuestion from "./AddQuestion"

export default function QuestionsAnswers(props) {

  const [productQuestions, setProductQuestions] = React.useState([])
  const [questionCount, setQuestionCount] = React.useState(2)
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
      refresh={fetchQuestions}
      darkTheme={props.darkTheme}
    />
  ))

  const buttonStyle = props.darkTheme ? "btn btn-outline-light" : "btn btn-outline-dark"

  const searchStyle = {
    borderColor: props.darkTheme ? "white" : "black",
    color: props.darkTheme ? "white" : "black",
  }

  return (
    <>
      <div className='sectionTitle pt-5'>
        {`QUESTIONS & ANSWERS`}
      </div>
      <div className="pt-3">
        <input className="w-100 searchBar" style={searchStyle} onChange={e => setSearch(e.target.value)} value={search} placeholder="Have a question? Search for answers..."></input>
      </div>
      <div className="pt-2 mb-2 questionsColumn">
        {QAElements}
      </div>
      {questionCount === 2 &&
      <button onClick={() => setQuestionCount(999)} className={buttonStyle}>More Questions</button>
      }
      <button className={`ms-3 ${buttonStyle}`} data-bs-toggle="modal" data-bs-target="#questionModal">+ Add a Question</button>
      <AddQuestion selected={props.selected} refresh={fetchQuestions} darkTheme={props.darkTheme}/>
    </>
  )
}