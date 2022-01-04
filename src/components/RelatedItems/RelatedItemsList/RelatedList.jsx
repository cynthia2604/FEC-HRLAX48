import React from "react";
import RelatedListEntry from './RelatedListEntry'
import { IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function RelatedList(props) {
  const [xPos, setXPos] = React.useState(0)
  const [renderLeft, setRenderLeft] = React.useState(0)
  const [renderRight, setRenderRight] = React.useState(0)

  React.useEffect(() => {
    setRenderRight(Math.floor(props.related.length/4))
  }, [props.related])

  const entry =  props.related.map(product => {
      return(
          <RelatedListEntry key={product.id}
            currentItem={product}
            setRenderTable={props.setRenderTable}
            setSelectRelated={props.setSelectRelated}
            renderTable={props.renderTable}
            darkTheme={props.darkTheme}
            width={props.width}
            related={props.related}
          />
      )
  })

  function translateX(direction) {
    if (direction === 'right') {
      setRenderLeft(count => count + 1)
      setRenderRight(count => count - 1)
      setXPos(x => x - props.width)
    } else {
      setRenderLeft(count => count - 1)
      setRenderRight(count => count + 1)
      setXPos(x=> x + props.width)
    }
  }
  return (
      <div className="carousel-container" data-testid= "related-items-carousel">
          <div className= "carousel-container-inner" style={{
            transform: `translateX(${xPos}px)`,
            width: `${(props.related.length/4) * props.width}px`
          }}>
            {entry}
          </div>
        {(renderLeft > 0) && <ArrowBackIosNewIcon className="slide-button-left" onClick={() => translateX('left')}/>}
        {(renderRight > 1) && <ArrowForwardIosIcon className="slide-button-right" onClick={() => translateX('right')}/> }
      </div>
  )

}


// return (
//   <div className="carousel-container" data-testid= "related-items-carousel">
//       <div className= "carousel-container-inner" style={{transform: `translateX(${xPos}px)`, width: `${(props.related.length/4) * props.width}px`}}>
//         {entry}
//       </div>
//     {(renderLeft > 0) && <ArrowBackIosNewIcon className="slide-button-left" onClick={() => translateX('left')}/>}
//     {(renderRight > 1) && <ArrowForwardIosIcon className="slide-button-right" onClick={() => translateX('right')}/> }
//   </div>
// )