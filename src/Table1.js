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
    createData('Arapahoe', 4, "basketball", 40),
    createData('Denver', 5, "mall", 50),
    createData('Broomfield', 7, "hike", 74),
    createData('Boulder', 8, "bike ride", 68),
    createData('Jefferson', 3, "movies", 93),
  ];
  
export function Table1() {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Counties Near Me</TableCell>
              <TableCell align="right">Hours Spent/Week</TableCell>
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

