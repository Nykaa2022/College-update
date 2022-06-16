import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';


const Title = styled.h1`
  color: teal;
`;

// Generate Order Data
function createData(id, date, name, shipTo, Comment, amount) {
  return { id, date, name, shipTo, Comment, amount };
}

const rows = [
  createData(
    0,
    '16 May, 2022',
    'Elvis Presley',
    'Tupelo, MS',
    'Amazing product😘👌',
    312.44,
  ),
  createData(
    1,
    '16 May, 2022',
    'Paul McCartney',
    'London, UK',
    'Really Nice product💖',
    866.99,
  ),
  createData(
      2,
       '16 May, 2022',
        'Tom Scholz',
         'Boston, MA',
          'Best Quality ever!👍',
           100.81),
  createData(
    3,
    '16 May, 2022',
    'Michael Jackson',
    'Gary, IN',
    'I like this product more👏👏',
    654.39,
  ),
  createData(
    4,
    '15 May, 2022',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'Love this product😍',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}


export default function Comments() {
    return (
      <React.Fragment>
        <Title>Recent Reviews</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight:"bold",backgroundColor:"seagreen",color:"whitesmoke"}}>Date</TableCell>
              <TableCell style={{fontWeight:"bold",backgroundColor:"seagreen",color:"whitesmoke"}}>Name</TableCell>
              <TableCell style={{fontWeight:"bold",backgroundColor:"seagreen",color:"whitesmoke"}}>From</TableCell>
              <TableCell style={{fontWeight:"bold",backgroundColor:"seagreen",color:"whitesmoke"}}>Comment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.Comment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link  href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more 
        </Link>
      </React.Fragment>
    );
  }
  