import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';


const comparison = {
  rows: (arr1, arr2) => {
    let combinedArr = arr1.features.concat(arr2.features)

    const filteredArr = combinedArr.reduce((a, {feature, value}) => {
      let item = a.find(element => element.feature === feature);
      if (!item) {
        return [...a, {feature , value: [value]}]
      }
      item.value.push(value)
      return a;
    }, [])

    return filteredArr.map(feature => {
      if (feature.value.length > 1) {
        return (
          <TableRow style={{marginTop:'10px'}}>
            <TableCell align="left" >{feature.value[0]}</TableCell>
            <TableCell scope="row" style={{fontWeight:'bold'}}>{feature.feature} </TableCell>
            <TableCell align="right">{feature.value[1]}</TableCell>
          </TableRow>
        )
      } else if (arr1.features.some(item => item.feature === feature.feature)) {
        return (
          <TableRow style={{marginTop:'10px'}}>
            <TableCell align="left">{feature.value[0]}</TableCell>
            <TableCell scope="row" style={{fontWeight:'bold'}}>{feature.feature}</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        )
      } else if (arr2.features.some(item => item.feature === feature.feature)) {
        return (
          <TableRow style={{marginTop:'10px'}}>
            <TableCell align="left"></TableCell>
            <TableCell scope="row" style={{fontWeight:'bold'}}>{feature.feature}</TableCell>
            <TableCell align="right">{feature.value[0]}</TableCell>
          </TableRow>
        )
      }
    })
  }
}

export default comparison;

//