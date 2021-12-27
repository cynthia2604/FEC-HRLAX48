import React from 'react'
import axios from 'axios'
import Options from '../../config.js';

export default function CompareTable(props) {

  // const comparison = props.
  return(
    <>
    {props.selectRelated &&
    <table className="table">
      <thead text="comparing">
        <tr>
          <th scope="col">{props.selected.name}</th>
          <th scope ="col>"></th>
          <th scope="col">{props.selectRelated.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <th scope= "row">1</th>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <th scope= "row">1</th>
          <td style={{cellSpacing: '20px'}}>2</td>
        </tr>
        <tr>
          <td>3</td>
          <th scope= "row">1</th>
          <td>3</td>
        </tr>
      </tbody>
    </table>
    }
    </>
  )
}

