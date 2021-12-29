import React from 'react';

const comparison = {
  rows1: (arr1) => {
   return
     arr1.features.map(feature => (
      <tr>
        <td>✓</td>
        <th scope="row">{feature.value}</th>
        <td></td>
      </tr>
  ))
  },
  
  rows2: (arr2) => {
    return arr2.features.forEach(feature => (
      <tr>
        <td></td>
        <th scope="row">{feature.value}</th>
        <td>✓</td>
      </tr>
    ))
  }
}

export default comparison;