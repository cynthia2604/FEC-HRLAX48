import React from 'react';
import axios from 'axios';
import Options from '../../config';
import { Alert, Rating, Snackbar } from '@mui/material';
import utils from '../utils';

export default function AddReview(props) {
  const [rating, setRating] = React.useState(0);
  const [recommend, setRecommend] = React.useState();
  const [size, setSize] = React.useState();
  const [width, setWidth] = React.useState();
  const [comfort, setComfort] = React.useState();
  const [quality, setQuality] = React.useState();
  const [length, setLength] = React.useState();
  const [fit, setFit] = React.useState();
  const [summary, setSummary] = React.useState('');
  const [body, setBody] = React.useState('');
  const [photos, setPhotos] = React.useState([]);
  const [photosToUpload, setPhotosToUpload] = React.useState([]);
  const [nickname, setNickname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [showError, setShowError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  async function handleSubmit() {
    let error = [];
    if (!rating) {
      error.push('Rating Required');
    }
    if (recommend === undefined) {
      error.push('Recommendation Required');
    }
    if (props.productMeta.characteristics.Size && !size) {
      error.push('Size Feedback Required');
    }
    if (props.productMeta.characteristics.Width && !width) {
      error.push('Width Feedback Required');
    }
    if (props.productMeta.characteristics.Comfort && !comfort) {
      error.push('Comfort Feedback Required');
    }
    if (props.productMeta.characteristics.Quality && !quality) {
      error.push('Quality Feedback Required');
    }
    if (props.productMeta.characteristics.Length && !length) {
      error.push('Length Feedback Required');
    }
    if (props.productMeta.characteristics.Fit && !fit) {
      error.push('Fit Feedback Required');
    }
    if (body.length < 50) {
      error.push('Review Too Short');
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
      let characteristics = {};
      if (props.productMeta.characteristics.Size) {
        characteristics[props.productMeta.characteristics.Size.id] = size;
      }
      if (props.productMeta.characteristics.Width) {
        characteristics[props.productMeta.characteristics.Width.id] = width;
      }
      if (props.productMeta.characteristics.Comfort) {
        characteristics[props.productMeta.characteristics.Comfort.id] = comfort;
      }
      if (props.productMeta.characteristics.Quality) {
        characteristics[props.productMeta.characteristics.Quality.id] = quality;
      }
      if (props.productMeta.characteristics.Length) {
        characteristics[props.productMeta.characteristics.Length.id] = length;
      }
      if (props.productMeta.characteristics.Fit) {
        characteristics[props.productMeta.characteristics.Fit.id] = fit;
      }

      axios
        .post(
          `${Options.URL}/reviews`,
          {
            product_id: props.selected.id,
            rating: rating,
            summary: summary,
            body: body,
            recommend: recommend,
            name: nickname,
            email: email,
            photos: photos,
            characteristics: characteristics,
          },
          {
            headers: {
              Authorization: Options.TOKEN,
            },
          }
        )
        .then(() => {
          alert('Review Submitted!');
          $('.modal-backdrop').remove();
        })
        .then(() => {
          props.setShowModal(false);
          props.refresh();
        })
        .catch((err) => alert(err));
    }
  }

  async function handleUpload(files) {
    if (files.length <= 5) {
      let uploads = [];
      for (let i = 0; i < files.length; i++) {
        await axios
          .post('https://api.imgur.com/3/image', files[i], {
            headers: {
              Authorization: 'Client-ID 78dc8e1b5fb253b',
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

  function textRating(rating) {
    if (rating === 1) {
      return <>Poor</>;
    }
    if (rating === 2) {
      return <>Fair</>;
    }
    if (rating === 3) {
      return <>Average</>;
    }
    if (rating === 4) {
      return <>Good</>;
    }
    if (rating === 5) {
      return <>Great</>;
    }
  }

  function bodyMinimum() {
    while (50 - body.length > 0) {
      return 'Minimum required characters left: ' + (50 - body.length);
    }
    return 'Minimum Reached';
  }

  function handlePhotos(e) {
    setPhotosToUpload(e.target.files);
    handleUpload(e.target.files);
  }

  function handleClose() {
    setShowError(false);
  }

  const modalStyle = {
    backgroundColor: props.darkTheme ? 'rgb(50, 50, 50)' : 'white',
    color: props.darkTheme ? 'white' : 'black',
  };

  return (
    <div>
      <div
        className='modal fade'
        id='addReview'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='addReviewLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
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
              <h5 className='modal-title' id='addReviewLabel'>
                Write your review about {props.selected.name}
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
                <div className='form-group d-flex align-items-center'>
                  <label className='col-form-label pe-2'>Overall Rating*</label>
                  <Rating
                    name='rating'
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                  {textRating(rating)}
                </div>
                <div className='form-group'>
                  <label htmlFor='recommend' className='col-form-label pe-2'>
                    Do you recommend this product?*
                  </label>
                  <div
                    className='form-check form-check-inline'
                    onClick={() => setRecommend(true)}
                  >
                    <input
                      className='form-check-input'
                      type='radio'
                      id='recommend'
                      name='recommended'
                      value='true'
                    ></input>
                    <label className='form-check-label' htmlFor='recommend'>
                      True
                    </label>
                  </div>
                  <div
                    className='form-check form-check-inline'
                    onClick={() => setRecommend(false)}
                  >
                    <input
                      className='form-check-input'
                      type='radio'
                      id='recommend2'
                      name='recommended'
                      value='false'
                    ></input>
                    <label className='form-check-label' htmlFor='recommend2'>
                      False
                    </label>
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='recommend' className='col-form-label'>
                    Product Characteristics*
                  </label>
                  {props.productMeta.characteristics.Size && (
                    <>
                      <div className='pt-3 d-flex justify-content-between'>
                        <p>Size</p>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='size'
                            value='1'
                            onClick={() => setSize(1)}
                          ></input>
                          Size Too Small
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='size'
                            value='2'
                            onClick={() => setSize(2)}
                          ></input>
                          1/2 Size Too Small
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='size'
                            value='3'
                            onClick={() => setSize(3)}
                          ></input>
                          Perfect
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='size'
                            value='4'
                            onClick={() => setSize(4)}
                          ></input>
                          1/2 Size Too Big
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='size'
                            value='5'
                            onClick={() => setSize(5)}
                          ></input>
                          Size Too Big
                        </label>
                      </div>
                    </>
                  )}
                  {props.productMeta.characteristics.Width && (
                    <>
                      <div className='pt-3 d-flex justify-content-between'>
                        <p>Width</p>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='width'
                            value='1'
                            onClick={() => setWidth(1)}
                          ></input>
                          Too Narrow
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='width'
                            value='2'
                            onClick={() => setWidth(2)}
                          ></input>
                          Slightly Narrow
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='width'
                            value='3'
                            onClick={() => setWidth(3)}
                          ></input>
                          Perfect
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='width'
                            value='4'
                            onClick={() => setWidth(4)}
                          ></input>
                          Slightly Wide
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='width'
                            value='5'
                            onClick={() => setWidth(5)}
                          ></input>
                          Too Wide
                        </label>
                      </div>
                    </>
                  )}
                  {props.productMeta.characteristics.Comfort && (
                    <>
                      <div className='pt-3 d-flex justify-content-between'>
                        <p>Comfort</p>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='comfort'
                            value='1'
                            onClick={() => setComfort(1)}
                          ></input>
                          Uncomfortable
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='comfort'
                            value='2'
                            onClick={() => setComfort(2)}
                          ></input>
                          Slightly Uncomfortable
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='comfort'
                            value='3'
                            onClick={() => setComfort(3)}
                          ></input>
                          Ok
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='comfort'
                            value='4'
                            onClick={() => setComfort(4)}
                          ></input>
                          Comfortable
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='comfort'
                            value='5'
                            onClick={() => setComfort(5)}
                          ></input>
                          Perfect
                        </label>
                      </div>
                    </>
                  )}
                  {props.productMeta.characteristics.Quality && (
                    <>
                      <div className='pt-3 d-flex justify-content-between'>
                        <p>Quality</p>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='quality'
                            value='1'
                            onClick={() => setQuality(1)}
                          ></input>
                          Poor
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='quality'
                            value='2'
                            onClick={() => setQuality(2)}
                          ></input>
                          Below Average
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='quality'
                            value='3'
                            onClick={() => setQuality(3)}
                          ></input>
                          As Expected
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='quality'
                            value='4'
                            onClick={() => setQuality(4)}
                          ></input>
                          Pretty Great
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='quality'
                            value='5'
                            onClick={() => setQuality(5)}
                          ></input>
                          Perfect
                        </label>
                      </div>
                    </>
                  )}
                  {props.productMeta.characteristics.Length && (
                    <>
                      <div className='pt-3 d-flex justify-content-between'>
                        <p>Length</p>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='length'
                            value='1'
                            onClick={() => setLength(1)}
                          ></input>
                          Short
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='length'
                            value='2'
                            onClick={() => setLength(2)}
                          ></input>
                          Slightly Short
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='length'
                            value='3'
                            onClick={() => setLength(3)}
                          ></input>
                          Perfect
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='length'
                            value='4'
                            onClick={() => setLength(4)}
                          ></input>
                          Slightly Long
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='length'
                            value='5'
                            onClick={() => setLength(5)}
                          ></input>
                          Long
                        </label>
                      </div>
                    </>
                  )}
                  {props.productMeta.characteristics.Fit && (
                    <>
                      <div className='pt-3 d-flex justify-content-between'>
                        <p>Fit</p>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='fit'
                            value='1'
                            onClick={() => setFit(1)}
                          ></input>
                          Tight
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='fit'
                            value='2'
                            onClick={() => setFit(2)}
                          ></input>
                          Slightly Tight
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='fit'
                            value='3'
                            onClick={() => setFit(3)}
                          ></input>
                          Perfect
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='fit'
                            value='4'
                            onClick={() => setFit(4)}
                          ></input>
                          Slightly Loose
                        </label>
                        <label className='radio-label-vertical'>
                          <input
                            type='radio'
                            name='fit'
                            value='5'
                            onClick={() => setFit(5)}
                          ></input>
                          Loose
                        </label>
                      </div>
                    </>
                  )}
                </div>
                <div className='form-group pt-4'>
                  <label htmlFor='summary-text' className='col-form-label'>
                    Review Summary:
                  </label>
                  <input
                    style={modalStyle}
                    className='form-control'
                    id='summary-text'
                    maxLength={60}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder='Example: Best Purchase Ever!'
                  ></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='Body-text' className='col-form-label'>
                    Review Body*:
                  </label>
                  <textarea
                    style={modalStyle}
                    className='form-control'
                    id='Body-text'
                    minLength={50}
                    maxLength={1000}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder='Why did you like the product or not?'
                  ></textarea>
                  {bodyMinimum()}
                </div>
                <div className='pt-3'>
                  <label htmlFor='formFileMultiple' className='form-label'>
                    Upload Photos (Limit 5)
                  </label>
                  <input
                    style={modalStyle}
                    className='form-control'
                    type='file'
                    id='formFileMultiple'
                    multiple
                    onChange={handlePhotos}
                  />
                  {photosToUpload.length > 0 &&
                    photosToUpload.length !== photos.length && (
                      <span>
                        {photosToUpload.length <= 5
                          ? 'Uploading...'
                          : 'Too Many Files'}
                      </span>
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
                <div className='form-group pt-2'>
                  <label htmlFor='nickname-text' className='col-form-label'>
                    Nickname*:
                  </label>
                  <input
                    style={modalStyle}
                    className='form-control'
                    id='nickname-text'
                    maxLength={60}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder='jackson11!'
                  ></input>
                  For privacy reasons, do not use your full name or email
                  address.
                </div>
                <div className='form-group pt-2'>
                  <label htmlFor='email-text' className='col-form-label'>
                    Email*:
                  </label>
                  <input
                    style={modalStyle}
                    className='form-control'
                    id='email-text'
                    type='email'
                    maxLength={60}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='jackson11@email.com'
                  ></input>
                  For authentication reasons, you will not be emailed.
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
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
