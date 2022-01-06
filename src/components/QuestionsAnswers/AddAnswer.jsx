import React from 'react';
import axios from 'axios';
import Options from '../../config';
import {
  Alert,
  CircularProgress,
  LinearProgress,
  Snackbar,
} from '@mui/material';
import $ from 'jquery';
import utils from '../utils';
import { Box } from '@mui/system';

export default function AddAnswer(props) {
  const [question, setQuestion] = React.useState(props.question);
  const [answer, setAnswer] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [photos, setPhotos] = React.useState([]);
  const [photosToUpload, setPhotosToUpload] = React.useState([]);
  const [showError, setShowError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  function handleSubmit() {
    let error = [];
    if (!answer) {
      error.push('Answer Required');
    }
    if (!nickname) {
      error.push('Nickname Required');
    }
    if (!utils.validateEmail(email)) {
      error.push('Invalid Email Format');
    }
    if (photos.length !== photosToUpload.length) {
      error.push('Incomplete Photo Uploads');
    }
    if (error.length) {
      setErrorMessage(error.join(', '));
      setShowError(true);
    } else {
      axios
        .post(
          `${Options.URL}/qa/questions/${props.question.question_id}/answers`,
          {
            body: answer,
            name: nickname,
            email: email,
            photos: photos,
          },
          {
            headers: {
              Authorization: Options.TOKEN,
            },
          }
        )
        .then(() => {
          alert('Answer Submitted!');
          $('.modal-backdrop').remove();
        })
        .then(() => {
          props.setShowModal(false);
          props.refresh();
        })
        .catch((err) => alert(err));
    }
  }

  function handlePhotos(e) {
    setPhotosToUpload(e.target.files);
    handleUpload(e.target.files);
  }

  async function handleUpload(files) {
    if (files.length <= 5) {
      let uploads = [];
      for (let i = 0; i < files.length; i++) {
        await axios
          .post('https://api.imgur.com/3/image', files[i], {
            headers: {
              Authorization: Options.IMGUR_KEY,
            },
          })
          .then((res) => {
            uploads.push(res.data.data.link);
          })
          .catch((err) => console.error(err));
      }
      setPhotos(uploads);
    } else {
      setErrorMessage('Too many files, limit is 5');
      setShowError(true);
    }
  }

  const modalStyle = {
    backgroundColor: props.darkTheme ? 'rgb(50, 50, 50)' : 'white',
    color: props.darkTheme ? 'white' : 'black',
  };

  function handleClick(e) {
    if (e.target !== e.currentTarget) {
      e.stopPropagation();
      return;
    }
    props.setShowModal(false);
  }

  function handleClose() {
    setShowError(false);
  }

  return (
    <div
      className='modal fade'
      id='answerModal'
      tabIndex='-1'
      aria-hidden='true'
      onClick={(e) => handleClick(e)}
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
              Submit Your Answer: {question.question_body}
            </h5>
            <button
              type='button'
              className='btn-close'
              onClick={() => props.setShowModal(false)}
              data-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='mb-3'>
                <label htmlFor='answer' className='col-form-label'>
                  Your Answer*:
                </label>
                <textarea
                  style={modalStyle}
                  type='text'
                  className='form-control'
                  id='answer'
                  maxLength={1000}
                  onChange={(e) => setAnswer(e.target.value)}
                ></textarea>
              </div>
              <div className='pt-3'>
                <label htmlFor='formFileMultiple' className='form-label'>
                  Upload Photos (Limit 5)
                </label>
                <input
                  style={modalStyle}
                  className='form-control'
                  type='file'
                  accept='image/*'
                  id='formFileMultiple'
                  multiple
                  onChange={handlePhotos}
                />
                {photosToUpload.length > 0 &&
                  photosToUpload.length !== photos.length && (
                    <div className='flex'>
                      {photosToUpload.length <= 5 ? (
                        <Box sx={{ width: '100%' }}>
                          <LinearProgress /> Uploading...
                        </Box>
                      ) : (
                        'Too Many Files'
                      )}
                    </div>
                  )}
                {photos.length > 0 && (
                  <div>
                    <span>Preview:</span>
                    <br />
                    {photos.map((photo) => (
                      <img
                        key={photo}
                        src={photo}
                        height='50px'
                        alt='Preview Photo'
                        className='me-2'
                      />
                    ))}
                  </div>
                )}
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
                  placeholder='Example: jack543!'
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
                  placeholder='jack@email.com'
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
              onClick={() => props.setShowModal(false)}
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
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
