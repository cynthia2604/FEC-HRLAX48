import React from "react";

export default function Style({
  name,
  selectedStyle,
  setSelectedStyle,
  skus,
  photos,
}) {
  // const circleStyle = (colorArr) => {
  //   console.log(colorArr);
  //   // return {
  //   //   linear-gradient( 315deg, colorArr[0], colorArr[0] 50%, colorArr[1], colorArr[1] 50% );
  //   // }
  // };
  // const colorFilter = (strColor) => {
  //   let s = new Option().style;
  //   let splitted = strColor.split(" ");
  //   let color = [];
  //   if (splitted.length === 1) {
  //     color = [...color, strColor, strColor];
  //     return circleStyle(color);
  //   }

  //   for (var str of splitted) {
  //     s.color = strColor;
  //     if (s.color === strColor) color = [...color, strColor];
  //   }
  //   return circleStyle(color);
  // };

  const handleSelection = () => {
    setSelectedStyle({
      color: `${name}`,
      skus: skus,
      photos: photos,
    });
    console.log(colorFilter(name));
  };

  const addSelectionBorder = {
    border: "3px solid lightgrey",
    background: `${name}`,
  };

  const removeSelectionBorder = {
    border: "none",
    backgroundColor: `${name}`,
  };

  return (
    <button
      name={name}
      className="pd__style-icon p-3"
      style={
        name === selectedStyle.color
          ? addSelectionBorder
          : removeSelectionBorder
      }
      onClick={handleSelection}
    ></button>
  );
}
