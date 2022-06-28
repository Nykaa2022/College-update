import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';
import getDataaa from "../pages/data/comments_data";


const Title = styled.h1`
  color: teal;
`;



function preventDefault(event) {
  event.preventDefault();
}


export default function Comments({id}) {
  
  const [sproduct_card, setproduct_card] = useState([
    {
      id: 4,
      Comment: '15 May, 2022',
      name: 'Bruce Springsteen'
    }
  ]);
  


useEffect(() => {
  getDataaa(id,(res) => {
      console.log("fiman", res);
      setproduct_card(res);
   });
   console.log("fi", sproduct_card);
}, []);

    return (
      <React.Fragment>
        <Title>Recent Reviews</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight:"bold",backgroundColor:"seagreen",color:"whitesmoke"}}>Name</TableCell>
              <TableCell style={{fontWeight:"bold",backgroundColor:"seagreen",color:"whitesmoke"}}>Comment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sproduct_card.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.comment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
  