import React from 'react';
import Options from '../../config';
import axios from 'axios';
import QAElement from './QAElement';
import AddQuestion from './AddQuestion';
import { Alert, Snackbar } from '@mui/material';

export default function QuestionsAnswers(props) {
  const [productQuestions, setProductQuestions] = React.useState([]);
  const [questionCount, setQuestionCount] = React.useState(2);
  const [search, setSearch] = React.useState('');
  const [showSnack, setShowSnack] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);

  let questions = [];

  React.useEffect(() => {
    fetchQuestions();
  }, [props.selected]);

  function fetchQuestions() {
    axios
      .get(
        `${Options.URL}/qa/questions/?product_id=${props.selected.id}&count=999`,
        {
          headers: {
            Authorization: Options.TOKEN,
          },
        }
      )
      .then((res) => setProductQuestions(res.data.results));
  }

  function handleClose() {
    setShowSnack(false);
  }

  if (search.length >= 3) {
    questions = productQuestions.filter((question) =>
      question.question_body.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    questions = productQuestions;
  }

  const QAElements = questions
    .slice(0, questionCount)
    .map((element) => (
      <QAElement
        element={element}
        key={element.question_id}
        refresh={fetchQuestions}
        darkTheme={props.darkTheme}
        setSnackMessage={setSnackMessage}
        setShowSnack={setShowSnack}
      />
    ));

  const buttonStyle = props.darkTheme
    ? 'btn btn-outline-light'
    : 'btn btn-outline-dark';

  const searchStyle = {
    borderColor: props.darkTheme ? 'white' : 'black',
    color: props.darkTheme ? 'white' : 'black',
  };

  return (
    <div onClick={(e) => props.tracker(e, 'Questions Answers')}>
      <div className='sectionTitle pt-5'>{`QUESTIONS & ANSWERS`}</div>
      <Snackbar
        open={showSnack}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='info'>
          {snackMessage}
        </Alert>
      </Snackbar>
      <div className='pt-3'>
        <input
          className='w-100 searchBar'
          style={searchStyle}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder='Have a question? Search for answers...'
        ></input>
      </div>
      <div className='pt-2 mb-3 questionsColumn'>{QAElements}</div>
      {questionCount === 2 && (
        <button onClick={() => setQuestionCount(999)} className={buttonStyle}>
          More Questions
        </button>
      )}
      <button
        className={`ms-2 ${buttonStyle}`}
        data-toggle='modal'
        data-target='#questionModal'
        onClick={() => setShowModal(true)}
      >
        + Add a Question
      </button>
      {showModal && (
        <AddQuestion
          selected={props.selected}
          refresh={fetchQuestions}
          darkTheme={props.darkTheme}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}
