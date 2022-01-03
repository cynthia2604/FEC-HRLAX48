import React from "react";

export default function Catalogue(props) {
  function handleClick(product) {
    props.setSelected(product);
    props.setView("detail");
  }

  const products = props.products.map((product) => (
    <div onClick={() => handleClick(product)} key={product.id} className="cP">
      <img
        src={`https://picsum.photos/id/${Math.floor(
          Math.random() * 100
        )}/300/200`}
        alt={product.name}
        width="200px"
      />
      <div className="">
        <b>{product.name}</b>
      </div>
      <div className="pb-4">${product.default_price}</div>
    </div>
  ));
  return (
    <div className="d-flex flex-wrap justify-content-around text-center">
      {products}
    </div>
  );
}
