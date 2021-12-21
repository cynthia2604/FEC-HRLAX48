import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RatingsAndReviews from './RatingsReviews'
import Overview from './Overview'
import RelatedItems from './RelatedItems'
import Catalogue from './Catalogue'

export default function App(props) {

  const [view, setView] = React.useState('catalogue')

  return (
      <>
        {view === 'catalogue' &&
        <div>
          <Catalogue setView={setView} />
        </div>
        }
        {view === 'detail' &&
        <div>
          <Overview />
          <RelatedItems />
          <RatingsAndReviews />
        </div>
        }
      </>
  )
}