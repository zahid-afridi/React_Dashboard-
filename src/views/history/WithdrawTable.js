import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Serial_Number, name, amount,source, withdrawammount, status,date) {
  return { Serial_Number, name, amount,source, withdrawammount, status,date };
}

const rows = [
  createData(1, "Zahid", "$200", "Jazzcashe","03230008883","success","23/2/23"),
  createData(2, "Saeed", "$200", "Essypasa","03287983743","pending","23/8/23"),
  createData(3, "Sadiq", "$500", "MCB bank","032000033","success","23/10/23"),
  createData(1, "Zahid", "$200", "Jazzcashe","03230008883","success","23/2/23"),
  
];

export default function Withdrwatable() {
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="withdraw record">
        <TableHead>
          <TableRow>
            <TableCell>Serial number</TableCell>
            <TableCell align="left">Name&nbsp;</TableCell>
            <TableCell align="left">Amount&nbsp;</TableCell>
            <TableCell align="left">Source&nbsp;</TableCell>
            <TableCell align="left">Withdraw acount</TableCell>
            <TableCell align="left">Status</TableCell>
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
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">{row.source}</TableCell>
              <TableCell align="left">{row.withdrawammount}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}