import React from 'react';
import moment from 'moment';
import axios from 'axios';
import Options from '../../config';
import AnswerPhoto from './AnswerPhoto';

export default function Answer(props) {
  const [marked, setMarked] = React.useState(false);
  const [helpful, setHelpful] = React.useState(props.answer.helpfulness);

  function markAnswerHelpful() {
    if (!marked) {
      axios
        .put(`${Options.QA_API}/api/qa/answers/${props.answer.id}/helpful`, null)
        .then(() => {
          setMarked(true);
          setHelpful(helpful + 1);
        });
    }
  }

  function reportAnswer() {
    axios
      .put(`${Options.QA_API}/api/qa/answers/${props.answer.id}/report`, null)
      .then(() => {
        props.refresh();
        props.setSnackMessage(
          "Thank you for your report, you shouldn't see this answer anymore"
        );
        props.setShowSnack(true);
      });
  }

  const sellerStyle = {
    color: props.darkTheme ? 'rgb(200, 200, 200)' : 'rgb(100, 100, 100)',
  };

  return (
    <div>
      <div className='answerBody'>{props.answer.body}</div>
      {props.answer.photos.length > 0 && (
        <div className='d-flex pt-2'>
          {props.answer.photos.map((photo) => (
            <AnswerPhoto
              key={photo}
              photo={photo}
              darkTheme={props.darkTheme}
            />
          ))}
        </div>
      )}
      <div className='d-flex reviewHelpful pt-2 pb-3' style={sellerStyle}>
        <div className='answerAuthor'>
          by{' '}
          {props.answer.answerer_name === 'Seller' ? (
            <b>{props.answer.answerer_name}</b>
          ) : (
            props.answer.answerer_name
          )}
          , {moment(props.answer.date).parseZone().format('MMMM D, YYYY')}
        </div>
        <div className='answerBottomDivider px-2'>|</div>
        <div>Helpful?</div>
        <div
          className='reviewBodyShowMore ps-2 pe-1 cP'
          onClick={markAnswerHelpful}
        >
          Yes
        </div>
        <div>({helpful})</div>
        <div className='answerBottomDivider px-2'>|</div>
        <div className='reviewBodyShowMore cP' onClick={reportAnswer}>
          Report
        </div>
      </div>
    </div>
  );
}
