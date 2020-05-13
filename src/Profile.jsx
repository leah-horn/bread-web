import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class Profile extends React.Component {
  render() {
    const nameMapping = {
      displayName: 'profile.displayName',
      email: 'profile.email',
      password: 'profile.password',
    };
    const profileData = {
      displayName: 'Display Name',
      email: 'E-Mail',
    };
    const rows = [{}, {}, {}];
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableBody>
            {Object.entries(nameMapping).map((row) => (
              <TableRow key={row[0]}>
                <TableCell component="th" scope="row" />
                <TableCell align="right">row[1]</TableCell>
                <TableCell align="right">Edit</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
