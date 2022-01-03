import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Share from "../Share.jsx";

it("renders without crashing", () => {
  render(<Share />);
  const div = document.createElement("div");
  ReactDOM.render(<Share />, div);
});
