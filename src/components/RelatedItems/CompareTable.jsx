import React from 'react'
import axios from 'axios'
import Options from '../../config.js';
import comparison from './util.js'

export default function CompareTable(props) {

  // const comparison = comparison.rows(props.selectRelated)

  return(
    <>
    {props.selectRelated  &&
    <table className="table">
      <thead text="comparing">
        <tr>
          <th scope="col">{props.selected.name}</th>
          <th scope ="col>"></th>
          <th scope="col">{props.selectRelated.name}</th>
        </tr>
      </thead>
      <tbody>
      {comparison.rows1(props.selectRelated)}
      </tbody>
    </table>

    }
    </>
  )
}

