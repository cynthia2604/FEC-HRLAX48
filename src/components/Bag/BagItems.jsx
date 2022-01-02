import React from "react";
import BagItem from "./BagItem";

export default function BagItems({ bag }) {
  return (
    <div>
      {bag &&
        bag.map((item) => {
          <BagItem item={item} />;
        })}
    </div>
  );
}
