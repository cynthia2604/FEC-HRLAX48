import React from 'react'
import axios from 'axios'
import Options from '../../config.js';

export default function CompareTable(props) {
  const [relatedDescription, setRelatedDescription] = React.useState()

  React.useEffect(() => {
    if (props.selectRelated) {
      axios.get(`${Options.URL}/products/${props.selectRelated.id}`, {
        headers: {
          Authorization: Options.TOKEN
        }
      }).then((res) => {
        setRelatedDescription(res.data.features)
      })
    }
  }, [props.selectRelated])

  return(
    <div>
      <table>

      </table>
    </div>
  )
}