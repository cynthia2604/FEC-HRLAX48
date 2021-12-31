import React from 'react';
import ProductCardEntry from './ProductCardEntry'
import { IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function OutfitList(props) {
  const [whoRender, setWhoRender] = React.useState('outfit')
  const [xPos, setXPos] = React.useState(0)
  const [renderLeft, setRenderLeft] = React.useState(0)

  function saveOutfit(selected) {
    let noDuplicateOutfits = props.outfits.filter(product => product.id !== selected.id)
    props.setSaved([...noDuplicateOutfits, selected])
    localStorage.setItem('outfits', JSON.stringify(props.saved))
  };

  function translateX(direction) {
    // (direction === 'right') ? setXPos(x => x - 200) : setXPos( x => x + 200)
    if (direction === 'right') {
      setRenderLeft(count => count + 1)
      setXPos(x => x - 200)
    } else {
      setRenderLeft(count => count - 1)
      setXPos(x=> x + 200)
    }
  }

  const entry = props.outfits.map(product => (
    <div className="user-card-list" key={product.id}>
      <ProductCardEntry
        currentItem={product}
        render={whoRender}
        setSaved={props.setSaved}
        outfits={props.outfits}
        whoRender={whoRender}
        selectedStyle={props.selectedStyle}
        darkTheme={props.darkTheme}
      />
    </div>
  ))

  return(
    <div className="user-outfits">
      <div className="card-products-list">
        <div className="carousel-container" >
        <div className= "carousel-container-inner" style={{transform: `translateX(${xPos}px)`}}>
          <div className="card-products-list">
            <button className="btn btn-light btn-square btn-xl" onClick={() => saveOutfit(props.currentView)}> Add Outfit </button>
            {entry}
          </div>
        </div>
        {(renderLeft >0) && <ArrowBackIosNewIcon className="slide-button-left" onClick={() => translateX('left')}/>}
        <ArrowForwardIosIcon className="slide-button-right" onClick={() => translateX('right')}/>
       </div>
      </div>
    </div>
  )
}

