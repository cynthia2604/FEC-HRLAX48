import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BagItems from "../BagItems.jsx";

const mockedSetBag = jest.fn();

it("render without error", () => {
  render(
    <BagItems
      bag={[
        {
          color: "Forest Green & Black",
          id: "1471555",
          name: "Camo Onesie",
          originalPrice: "140.00",
          quantity: 1,
          salePrice: null,
          size: "S",
          thumbnail:
            "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        },
      ]}
      setBag={mockedSetBag}
    />
  );
  const title = screen.getByText(/Bag/i);
  expect(title).toBeInTheDocument();
});

//getByRole
