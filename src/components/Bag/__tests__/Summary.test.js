import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Summary from "../Summary.jsx";

it("renders without error", () => {
  render(<Summary basket={[]} />);
  const title = screen.getByText(/Checkout/i);
  expect(title).toBeInTheDocument();
});
