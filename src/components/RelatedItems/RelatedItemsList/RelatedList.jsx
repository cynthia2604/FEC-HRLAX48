import React from "react";
import RelatedListEntry from './RelatedListEntry'
import { IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function RelatedList(props) {
  const [xPos, setXPos] = React.useState(0)
  const [renderLeft, setRenderLeft] = React.useState(0)
  const [newWidth, setNewWidth] = React.useState()

  const entry =  props.related.map(product => {
    if (props.selected.id !== product.id) {
      return(
          <RelatedListEntry key={product.id}
            currentItem={product}
            setRenderTable={props.setRenderTable}
            setSelectRelated={props.setSelectRelated}
            renderTable={props.renderTable}
            darkTheme={props.darkTheme}
          />
      )
    }
  })

  React.useEffect(() => {
    const width = (props.related.length/4) * props.width;
    setNewWidth(width);
  },[])

  function translateX(direction) {
    if (direction === 'right') {
      setRenderLeft(count => count + 1)
      setXPos(x => x - 200)
    } else {
      setRenderLeft(count => count - 1)
      setXPos(x=> x + 200)
    }
  }

  return (
    <div className="carousel-container" data-testid= "related-items-carousel">
        <div className= "carousel-container-inner" style={{transform: `translateX(${xPos}px)`, width: `${newWidth}`}}>
          {entry}
        </div>
      {(renderLeft >0) && <ArrowBackIosNewIcon className="slide-button-left" onClick={() => translateX('left')}/>}
      <ArrowForwardIosIcon className="slide-button-right" onClick={() => translateX('right')}/>
    </div>
  )
}

//{(renderLeft > 0) &&