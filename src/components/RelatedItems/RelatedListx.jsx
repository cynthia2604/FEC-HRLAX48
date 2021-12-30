import React from "react";
import ProductCardEntry from './ProductCardEntry'
import OutfitList from './OutfitList'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function RelatedList(props) {

  const entry =  props.related.map((product,i) => {
    if (props.selected.id !== product.id) {
      return(
        <div className="related-product-card" data-value={`${i}`} key={product.id} >
          <ProductCardEntry
            currentItem={product}
            render={whoRender}
            whoRender={setWhoRender}
            setRenderTable={props.setRenderTable}
            setSelectRelated={props.setSelectRelated}
            renderTable={props.renderTable}
            />
        </div>
      )
    }
  })

  const thumbItems = (array, [setThumbIndex, setThumbAnimation]) => {
    return array.map((item, i) => (
      <div className="thumb" key={i} onClick={()=> (setThumbIndex(i), setThumbAnimation(true))}>
        {item}
      </div>
    ))
  }

  const [whoRender, setWhoRender] = React.useState('related');
  const [mainIndex, setMainIndex] = React.useState(0);
  const [mainAnimation, setMainAnimation] = React.useState(false);
  const [thumbIndex, setThumbIndex] = React.useState(0);
  const [thumbAnimation, setThumbAnimation] = React.useState(false);
  const [thumbs] = React.useState(thumbItems(entry, [setThumbIndex, setThumbAnimation]));



  const slideNext= () => {
    if (!thumbAnimation && thumbIndex < thumbs.length -1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  }

  const slidePrev= () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  }

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true);
  }

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);
    if (e.type === 'action') {
      setThumbIndex(e.related-product-card)
      setThumbAnimation(false)
    } else {
      setMainIndex(thumbIndex);
    }
  }

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);
    if (!mainAnimation) {
      setMainIndex(e.item)
    }
  }

  return [
    <AliceCarousel
      items= {entry}
      activeIndex={mainIndex}
      animationType= "fadeout"
      AnimationDuration={800}
      disableDotsControls
      disableButtonsControls
      mouseTracking={!thumbAnimation}
      onSlideChange={syncMainBeforeChange}
      onSlideChanged={syncMainAfterChange}
      touchTracking={!thumbAnimation}
    />,
      <div className="card-products-list">
        <AliceCarousel
          activeIndex={thumbIndex}
          autowidth
          disableDotsControls
          disableButtonsControls
          items={thumbs}
          mouseTracking={false}
          onSlideChanged={syncThumbs}
          touchTracking={!mainAnimation}
        />
        <div className="btn-prev" onClick={slidePrev}>&lang;</div>
        <div className="btn-next" onClick={slideNext}>&rang;</div>
      </div>
  ]
}