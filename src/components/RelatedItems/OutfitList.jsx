import React from 'react';
import OutfitListEntry from './OutfitListEntry'
import { IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function OutfitList(props) {
  const [xPos, setXPos] = React.useState(0)
  const [renderLeft, setRenderLeft] = React.useState(0)

  function saveOutfit(selected) {
    let noDuplicateOutfits = props.outfits.filter(product => product.color !== selected.color)
    props.setSaved([...noDuplicateOutfits, selected])
    localStorage.setItem('outfits', JSON.stringify(props.saved))
  };

  function translateX(direction) {
    if (direction === 'right') {
      setRenderLeft(count => count + 1)
      setXPos(x => x - 200)
    } else {
      setRenderLeft(count => count - 1)
      setXPos(x=> x + 200)
    }
  }

  const entry = props.outfits.map(product => (

      <OutfitListEntry
        setSaved={props.setSaved}
        outfits={props.outfits}
        selectedStyle={props.selectedStyle}
        darkTheme={props.darkTheme}
        currentView={props.currentView}
        currentStyle= {product}
      />

  ))

  return(

        <div className="carousel-container" >
        <div className= "carousel-container-inner" style={{transform: `translateX(${xPos}px)`}}>
            <div className="add-outfit" onClick={() => saveOutfit(props.selectedStyle)}> Add Outfit +</div>
            {entry}
        </div>
        {(renderLeft >0) && <ArrowBackIosNewIcon className="slide-button-left" onClick={() => translateX('left')}/>}
        <ArrowForwardIosIcon className="slide-button-right" onClick={() => translateX('right')}/>
       </div>


  )
}

//<button className="btn btn-light btn-square btn-xl" onClick={() => saveOutfit(props.currentView)}> Add Outfit </button>