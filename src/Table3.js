import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        width: 1000,
    },
  });
  
  function createData(name, hours_spent, top_satisfier, positive_rating) {
    return { name, hours_spent, top_satisfier, positive_rating};
  }
  
  const rows = [
    createData('Arapahoe', 30, "soda", 30),
    createData('Denver', 25, "water", 74),
    createData('Broomfield', 20, "soda", 20),
    createData('Boulder', 40, "water", 70),
    createData('Jefferson', 30, "water", 83),
  ];
  
export function Table3() {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Counties Near Me</TableCell>
              <TableCell align="right">Money Spent/Week($)</TableCell>
              <TableCell align="right">Top Satisfier</TableCell>
              <TableCell align="right">Content With Their Habits(%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.hours_spent}</TableCell>
                <TableCell align="right">{row.top_satisfier}</TableCell>
                <TableCell align="right">{row.positive_rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

