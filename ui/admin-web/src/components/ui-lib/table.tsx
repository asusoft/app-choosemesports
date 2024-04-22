import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { PositionListFragment } from '@/shared/generated/graphql/graphql';


// const positions = [
//     {
//       id: "1",
//       name: "Goalkeeper",
//       sportID: "1",
//       stats: [{ name: "Saves" }]
//     },
//     {
//       id: "2",
//       name: "Right Back",
//       sportID: "1",
//       stats: [{ name: "Tackles" }]
//     },
//     {
//       id: "3",
//       name: "Left Back",
//       sportID: "1",
//       stats: [{ name: "Interceptions" }]
//     },
//     {
//       id: "4",
//       name: "Center Back",
//       sportID: "1",
//       stats: [{ name: "Clearances" }]
//     },
//     {
//       id: "5",
//       name: "Defensive Midfielder",
//       sportID: "1",
//       stats: [{ name: "Pass Completion Rate" }]
//     },
//     {
//       id: "6",
//       name: "Central Midfielder",
//       sportID: "1",
//       stats: [{ name: "Passes Completed" }]
//     },
//     {
//       id: "7",
//       name: "Attacking Midfielder",
//       sportID: "1",
//       stats: [{ name: "Chances Created" }]
//     },
//     {
//       id: "8",
//       name: "Right Winger",
//       sportID: "1",
//       stats: [{ name: "Crosses" }]
//     },
//     {
//       id: "9",
//       name: "Left Winger",
//       sportID: "1",
//       stats: [{ name: "Dribbles Completed" }, { name: "Dribbles Completed" }, { name: "Dribbles Completed" }]
//     },
//     {
//       id: "10",
//       name: "Striker",
//       sportID: "1",
//       stats: [{ name: "Goals Scored" }]
//     },
//     {
//       id: "11",
//       name: "Center Forward",
//       sportID: "1",
//       stats: [{ name: "Assists" }]
//     }
//   ]

export default function BasicTable({ positionList } : {positionList: PositionListFragment}) {
    const positions = positionList.positions
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: '900', fontSize: 20}}>Position</TableCell>
              <TableCell align="right" sx={{ fontWeight: '900', fontSize: 20}}>Stats</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {positions.map((position) => (
              <TableRow key={position.id}>
                <TableCell sx={{ fontWeight: '700', fontSize: 14}} component="th" scope="row">
                  {position.name}
                </TableCell>
                <TableCell align="right">
                {position.stats.map((stat) => (
                  <Typography sx={{ fontWeight: '700', fontSize: 14}}>{stat.name}</Typography>
                ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }