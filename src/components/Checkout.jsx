import React from "react";
import BagItems from "./Bag/BagItems";
import { useStateValue } from "../components/Overview/store/StateProvider";

export default function checkout({ setView, bag, setBag, darkTheme }) {
  const [{ basket }, dispatch] = useStateValue();

  React.useEffect(() => {
    let newItem = basket.pop();

    newItem && setBag([...bag, newItem]);
  }, [basket]);

  React.useEffect(() => {
    localStorage.setItem("bagItems", JSON.stringify(bag));
  }, [bag]);

  return <BagItems bag={bag} setBag={setBag} darkTheme={darkTheme} />;
}
