import React from "react";

export default function ReviewPhoto(props) {

  const [showModal, setShowModal] = React.useState(false)

  function handleClick(e) {
    if (e.target !== e.currentTarget) {
      event.stopPropagation()
      return
    }
    setShowModal(false)
  }

  const divStyle = {
    backgroundColor: props.darkTheme ? "rgb(50, 50, 50)" : "white",
  }

  return (
    <>
      <div className="cP me-2" style={{border: props.darkTheme ? '1px solid white' : '1px solid black'}}>
        <img src={props.photo.url} alt="Reviewer Photo" height="75px" onClick={() => setShowModal(true)} data-toggle="modal" data-target="#PhotoModal"></img>
      </div>
      {showModal &&
      <div className="modal fade" id="PhotoModal" tabIndex="-1" aria-labelledby="PhotoModalLabel" aria-hidden="true" onClick={(e) => handleClick(e)}>
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content" style={divStyle}>
            <div className="modal-body ms-auto me-auto">
            <button type="button" className="btn-close position-absolute top-0 end-0" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
              <img src={props.photo.url} alt="Reviewer Photo" className="img-fluid" ></img>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  )
}