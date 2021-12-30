import { FormControlLabel, FormGroup, Switch } from "@mui/material"
import React from "react"
import Switches from "../assets/Switches"

export default function Header(props) {

  const divStyle = {
    backgroundColor: props.darkTheme ? 'rgb(50, 50, 50)' : 'rgb(200, 200, 200)',
    color: props.darkTheme ? 'white' : 'black',
    position: 'sticky'
  }

  return (
    <div className="w-100 d-flex p-3 px-5 mb-4 align-items-center sticky-top" style={divStyle}>
      <div className="me-auto cP" onClick={() => props.setView("catalogue")}>
        <b>projectCatwalk</b>
      </div>
      <div className="p-0 pe-4 m-0" onChange={() => props.setDarkTheme(!props.darkTheme)}>
        {Switches()}
      </div>
      <div>
        by Migos
      </div>
    </div>
  )
}