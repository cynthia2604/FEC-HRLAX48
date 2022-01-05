import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';


const comparison = {
  rows: (arr1, arr2, darkTheme) => {
    let combinedArr = arr1.features.concat(arr2.features)

    const filteredArr = combinedArr.reduce((a, {feature, value}) => {
      let item = a.find(element => element.feature === feature);
      if (!item) {
        return [...a, {feature , value: [value]}]
      }
      item.value.push(value)
      return a;
    }, [])

    const rowStyle = {
      color: (darkTheme) ? 'white' : 'black',
      paddingLeft: '5px',
    }

    const rowStyle2 = {
      color: (darkTheme) ? 'white' : 'black',
      paddingRight: '20px',
    }

    const middleColumn = {
      fontWeight:'bold',
      paddingLeft:'80px',
      color: (darkTheme) ? 'white' : 'black',
    }

    return filteredArr.map((feature, i) => {
      if (feature.value.length > 1) {
        return (
          <TableRow style={{marginTop:'10px'}} key={i}>
            <TableCell align="left" style={rowStyle} >{feature.value[0]}</TableCell>
            <TableCell scope="row" style={middleColumn}>{feature.feature} </TableCell>
            <TableCell align="right" style={rowStyle2}>{feature.value[1]}</TableCell>
          </TableRow>
        )
      } else if (arr1.features.some(item => item.feature === feature.feature)) {
        return (
          <TableRow style={{marginTop:'10px'}} key={i}>
            <TableCell align="left" style={rowStyle}>{feature.value[0]}</TableCell>
            <TableCell scope="row" style={middleColumn}>{feature.feature}</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        )
      } else if (arr2.features.some(item => item.feature === feature.feature)) {
        return (
          <TableRow style={{marginTop:'10px'}} key={i}>
            <TableCell align="left"></TableCell>
            <TableCell scope="row" style={middleColumn}>{feature.feature}</TableCell>
            <TableCell align="right" style={rowStyle2}>{feature.value[0]}</TableCell>
          </TableRow>
        )
      }
    })
  }
}

export default comparison;

//