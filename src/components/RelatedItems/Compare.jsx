import React from 'react'
import axios from 'axios'
import CompareTable from './CompareTable'
import Options from '../../config.js';

export default function Compare(props) {
  const [selectedDescription, setSelectedDescription] = React.useState()

  React.useEffect(() => {
    axios.get(`${Options.URL}/products/${props.selected.id}`, {
      headers: {
        Authorization: Options.TOKEN
      }
    }).then((res) => {
      setSelectedDescription(res.data.features)
    })
  }, [props.selected])

  return(
    <>
      <CompareTable
        selectedDescription={selectedDescription}
        selectRelated={props.selectRelated}
      />
    </>
  )
}