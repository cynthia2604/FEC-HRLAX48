import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gallery from "../Gallery.jsx";

it("renders without crashing", () => {
  render(<Gallery selected={{ photos: [url] }} />);
  const div = document.createElement("div");
  ReactDOM.render(<Gallery />, div);
});
