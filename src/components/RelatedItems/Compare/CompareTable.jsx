import React from 'react'
import axios from 'axios'
import Options from '../../../config.js';
import comparison from './util.js'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,  { tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ClearIcon from '@mui/icons-material/Clear';

export default function CompareTable(props) {

  const colStyle = {
    fontWeight:'bold',
    fontSize:'20px',
    color: (props.darkTheme) ? 'white' : 'black',
  }

  const colStyle2= {
    fontWeight:'bold',
    fontSize:'20px',
    paddingRight:'20px',
    color: (props.darkTheme) ? 'white' : 'black',
  }

  const header = {
    fontSize:'13px',
    color: (props.darkTheme) ? 'white' : 'black',
  }

  const button = {
    position: 'absolute',
    top:'0',
    right:'0',
    color: (props.darkTheme) ? 'white' : 'black',
  }

  return(
    <Paper sx={{
      overflow: 'hidden',
      backgroundColor: (props.darkTheme) ? 'black' : 'white',
      borderColor: (props.darkTheme) ? 'black' : 'white'
    }}>

    {(props.selectedDescription && props.selectRelated)  &&
      <TableContainer sx={{
        maxHeight: 300,
        marginLeft: '5px',
        "&::-webkit-scrollbar": {
          display: 'none'
        }
      }}>
      <Table stickyHeader aria-label="stick-table" className="table" sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
            minWidth: 250,
            marginLeft: '5px',
            borderColor: (props.darkTheme) ? 'black' : 'white',
            backgroundColor: (props.darkTheme) ? 'black' : 'white',
          }
      }}>
        <TableHead style={{fontSize:'15px'}} >
          <TableRow>
            <TableCell style={header}>Compare</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="col" align="left" style={colStyle}>{props.selected.name}</TableCell>
            <TableCell scope ="col" align="inherit"></TableCell>
            <TableCell scope="col" align="right" style={colStyle2}>{props.selectRelated.name}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{marginTop:'10px'}}>
          {comparison.rows( props.selectedDescription , props.selectRelated, props.darkTheme )}
        </TableBody>
      </Table>
      </TableContainer>
    }
    <ClearIcon style={button} onClick={()=> props.setRenderTable(!props.renderTable)}/>
    </Paper>
  )
}

//<Paper sx={{width: '100%', overflow: 'hidden'}}>
//</Paper>