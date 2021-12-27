import React from "react"

export default function Header(props) {

  return (
    <div className="w-100 d-flex p-3 px-5 mb-4 bg-dark text-white">
      <div className="me-auto cP" onClick={() => props.setView("catalogue")}>
        <b>projectCatwalk</b>
      </div>
      <div>
        by Migos
      </div>
    </div>
  )
}