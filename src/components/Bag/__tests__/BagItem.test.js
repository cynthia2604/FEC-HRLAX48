import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BagItem from "../BagItem.jsx";

const mockedDeleteCartItem = jest.fn();

const itemData = {
  color: "Forest Green & Black",
  id: "1471555",
  name: "Camo Onesie",
  originalPrice: "140.00",
  quantity: 1,
  salePrice: "100",
  size: "S",
  thumbnail:
    "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
};

it("should render item added to bag", () => {
  render(<BagItem item={itemData} deleteCartItem={mockedDeleteCartItem} />);
  const element = screen.getByText(/Forest Green & Black/i);
  expect(element).toBeInTheDocument();
});

it("should render salePrice if salePrice is available", () => {
  render(<BagItem item={itemData} deleteCartItem={mockedDeleteCartItem} />);
  const element = screen.getByText(/100/i);
  expect(element).toBeInTheDocument();
});
