import React from 'react';
import axios from 'axios';
import Options from '../../config';
import utils from '../utils';
import { Alert, Snackbar } from '@mui/material';

export default function AddQuestion(props) {
  const [question, setQuestion] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [showError, setShowError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  function handleSubmit() {
    let error = [];
    if (!question) {
      error.push('Question Required');
    }
    if (!nickname) {
      error.push('Nickname Required');
    }
    if (!utils.validateEmail(email)) {
      error.push('Invalid Email Format');
    }
    if (error.length) {
      setErrorMessage(error.join(', '));
      setShowError(true);
    } else {
      axios
        .post(
          `${Options.URL}/qa/questions`,
          {
            product_id: props.selected.id,
            body: question,
            name: nickname,
            email: email,
          },
          {
            headers: {
              Authorization: Options.TOKEN,
            },
          }
        )
        .then(() => {
          alert('Question Submitted!');
          props.setShowModal(false);
          $('.modal-backdrop').remove();
        })
        .then(() => props.refresh())
        .catch((err) => alert(err));
    }
  }
  function handleClose() {
    setShowError(false);
  }

  const modalStyle = {
    backgroundColor: props.darkTheme ? 'rgb(50, 50, 50)' : 'white',
    color: props.darkTheme ? 'white' : 'black',
  };

  return (
    <div
      className='modal fade'
      id='questionModal'
      tabIndex='-1'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content' style={modalStyle}>
          <Snackbar
            open={showError}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity='error'>
              {errorMessage}
            </Alert>
          </Snackbar>
          <div className='modal-header'>
            <h5 className='modal-title'>
              New Question About: {props.selected.name}
            </h5>
            <button
              type='button'
              className='btn-close'
              data-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='mb-3'>
                <label htmlFor='question' className='col-form-label'>
                  Your Question*:
                </label>
                <textarea
                  style={modalStyle}
                  type='text'
                  className='form-control'
                  id='question'
                  maxLength={1000}
                  placeholder='Where does this product ship from?'
                  onChange={(e) => setQuestion(e.target.value)}
                ></textarea>
              </div>
              <div className='mb-3'>
                <label htmlFor='nickname' className='col-form-label'>
                  Nickname*:
                </label>
                <input
                  style={modalStyle}
                  className='form-control'
                  id='nickname'
                  maxLength={60}
                  placeholder='Example: jackson11!'
                  onChange={(e) => setNickname(e.target.value)}
                ></input>
                For privacy reasons, do not use your full name or email address
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='col-form-label'>
                  Email*:
                </label>
                <input
                  style={modalStyle}
                  type='email'
                  className='form-control'
                  id='email'
                  maxLength={60}
                  placeholder='jackson11@gmail.com'
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                For authentication reasons, you will not be emailed
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={handleSubmit}
              // data-dismiss='modal'
            >
              Submit Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
