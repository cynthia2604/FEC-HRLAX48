import React from "react";
import BagItems from "./Bag/BagItems";
import { useStateValue } from "../components/Overview/store/StateProvider";

export default function checkout({ setView, bag, setBag }) {
  const [{ basket }, dispatch] = useStateValue();

  React.useEffect(() => {
    basket.length && setBag([...bag, ...basket]);
    console.log("basket", basket);
  }, [basket]);

  React.useEffect(() => {
    localStorage.setItem("bagItems", JSON.stringify(bag));
    console.log("bag", bag);
  }, [bag]);

  return <BagItems bag={bag} />;
}
