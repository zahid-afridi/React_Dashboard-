import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Serial_Number, commession, commessionamount,date,) {
  return { Serial_Number, commession, commessionamount,date, };
}

const rows = [
  createData(1,  "level1","$100", "23/2/23"),
  createData(2, "level2", "$300","23/8/23"),
  createData(3,  "level3","$300", "23/10/23"),
  createData(1,  "level4","$300", "23/2/23"),
  
];

export default function Commessionhistory() {
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="withdraw record">
        <TableHead>
          <TableRow>
            <TableCell>Serial number</TableCell>
            <TableCell align="left">Commession Type&nbsp;</TableCell>
            <TableCell align="left">Commession Amount&nbsp;</TableCell>
            <TableCell align="left">Date</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Serial_Number}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Serial_Number}
              </TableCell>
              <TableCell align="left">{row.commession}</TableCell>
              <TableCell align="left">{row.commessionamount}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}