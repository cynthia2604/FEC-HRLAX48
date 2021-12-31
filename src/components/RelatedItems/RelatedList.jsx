import React from "react";
import ProductCardEntry from './ProductCardEntry'
import OutfitList from './OutfitList'
import { IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function RelatedList(props) {

  const [whoRender, setWhoRender] = React.useState('related');
  const [xPos, setXPos] = React.useState(0)
  const [renderLeft, setRenderLeft] = React.useState(0)

  const entry =  props.related.map(product => {
    if (props.selected.id !== product.id) {
      return(
        <div className="related-products-card" key={product.id} >
          <ProductCardEntry
            currentItem={product}
            render={whoRender}
            whoRender={setWhoRender}
            setRenderTable={props.setRenderTable}
            setSelectRelated={props.setSelectRelated}
            renderTable={props.renderTable}
            darkTheme={props.darkTheme}
            />
        </div>
      )
    }
  })

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

  return (
    <div className="carousel-container" >
        <div className= "carousel-container-inner" style={{transform: `translateX(${xPos}px)`}}>
          <div className="card-products-list">
            {entry}
          </div>
        </div>
      {(renderLeft >0) && <ArrowBackIosNewIcon className="slide-button-left" onClick={() => translateX('left')}/>}
      <ArrowForwardIosIcon className="slide-button-right" onClick={() => translateX('right')}/>
    </div>
  )
}

//{(renderLeft > 0) &&