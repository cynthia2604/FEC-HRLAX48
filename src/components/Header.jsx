import { Switch } from "@mui/material";
import React from "react";
import Switches from "../assets/Switches";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function Header(props) {
  const divStyle = {
    backgroundColor: props.darkTheme ? "rgb(40, 40, 40)" : "rgb(225, 225, 225)",
    color: props.darkTheme ? "white" : "black",
    position: "sticky",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.5)",
  };

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    props.setView("catalogue");
  }

  function handleChange() {
    props.setDarkTheme(!props.darkTheme);
    localStorage.setItem("darkMode", JSON.stringify(!props.darkTheme));
  }

  return (
    <div
      className="w-100 d-flex px-5 mb-4 align-items-center sticky-top"
      style={divStyle}
    >
      <div className="me-auto cP" onClick={handleClick}>
        <b>projectCatwalk</b>
      </div>
      <div className="p-0 pe-4 m-0" onChange={handleChange}>
        {Switches()}
        <LocalMallIcon />
      </div>
      <div>by Migos</div>
    </div>
  );
}
