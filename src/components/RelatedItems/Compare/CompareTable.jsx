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

  return(
    <Paper sx={{ overflow: 'hidden'}}>
    {(props.selectedDescription && props.selectRelated)  &&
      <TableContainer sx={{ maxHeight: 200}}>
      <Table stickyHeader aria-label="stick-table" className="table"  sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
            minWidth: 250,
            marginLeft: '5px',
            backgroundColor: 'white',
            borderColor:"white"
          }
      }}>
        <TableHead style={{fontSize:'15px'}}> Compare
          <TableRow>
            <TableCell scope="col" style={{fontWeight:'bold', fontSize:'20px'}}>{props.selected.name}</TableCell>
            <TableCell scope ="col" style={{fontWeight:'bold', fontSize:'20px'}}></TableCell>
            <TableCell scope="col" style={{fontWeight:'bold', fontSize:'20px'}}>{props.selectRelated.name}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{marginTop:'10px'}}>
        {comparison.rows(props.selectedDescription , props.selectRelated,)}
        </TableBody>
      </Table>
      </TableContainer>
    }
    <ClearIcon style={{position: 'absolute', top:'0', right:'0'}}onClick={()=> props.setRenderTable(!props.renderTable)}/>
    </Paper>
  )
}

//<Paper sx={{width: '100%', overflow: 'hidden'}}>
//</Paper>