import React from 'react';

export default function Footer(props) {
  const divStyle = {
    backgroundColor: props.darkTheme ? 'rgb(40, 40, 40)' : 'rgb(225, 225, 225)',
    color: props.darkTheme ? 'white' : 'black',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div
      className='w-100 d-flex p-2 px-5 mt-5 align-items-center justify-content-center'
      style={divStyle}
    >
      <div>® 2022 Migos</div>
    </div>
  );
}
