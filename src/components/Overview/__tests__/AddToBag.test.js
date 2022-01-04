import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddToBag from "../AddToBag.jsx";
import { useStateValue } from "../store/StateProvider";
import reducer, {
  initialState,
} from "../src/components/Overview/store/Reducer.jsx";

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

const basketData = [
  {
    color: "Forest Green & Black",
    id: "1471555",
    name: "Camo Onesie",
    originalPrice: "140.00",
    quantity: 1,
    salePrice: "100",
    size: "S",
    thumbnail:
      "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
  },
  {
    color: "Forest Green & Black",
    id: "1471555",
    name: "Camo Onesie",
    originalPrice: "140.00",
    quantity: 1,
    salePrice: "100",
    size: "S",
    thumbnail:
      "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
  },
];

const mockDispatch = jest.fn();

const mocked
// jest.mock("./useTest", () => ({
//   useTest: () => ({ state: "mocked_value" }),
// }));

it("renders without crashing", () => {
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <AddToBag
        basket={basketData}
        selected={itemData}
        dispatch={mockDispatch}
      />
    </StateProvider>
  );
  const div = document.createElement("div");
  ReactDOM.render(<AddToBag />, div);
});
