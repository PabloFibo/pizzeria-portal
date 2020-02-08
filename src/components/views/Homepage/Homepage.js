import React from 'react';
import styles from './Homepage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoStatistics = [
  {id: 1, purchaserName: 'Samson', orderCost: 56},
  {id: 2, purchaserName: 'Tony', orderCost: 23},
  {id: 3, purchaserName: 'Pedro', orderCost: 65},
  {id: 4, purchaserName: 'Olaf', orderCost: 44},
  {id: 5, purchaserName: 'David', orderCost: 39},
  {id: 6, purchaserName: 'Willy', orderCost: 39},
];

const demoBooking = [
  {id: 1, tableNumber: 2, purchaserName: 'Samson', reservationHours: '17.30 - 19.00'},
  {id: 2, tableNumber: 6, purchaserName: 'Tony', reservationHours: '14.00 - 18.00'},
  {id: 3, tableNumber: 'N/A', purchaserName: 'Pedro', reservationHours: null},
  {id: 4, tableNumber: 4, purchaserName: 'Olaf', reservationHours: '10.30 - 15.00'},
  {id: 5, tableNumber: 'N/A', purchaserName: 'David', reservationHours: null},
  {id: 6, tableNumber: 3, purchaserName: 'Willy', reservationHours: '19.30 - 23.30'},
];

const Homepage = () => (

  <div className={styles.component}>
    <h3>Today orders</h3>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Purchaser Name</TableCell>
            <TableCell>Order cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoStatistics.map(row => (
            <TableRow key={row.id}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell>
                {row.purchaserName}
              </TableCell>
              <TableCell>
                {row.orderCost}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <h3>Today bookings</h3>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Table number</TableCell>
            <TableCell>Purchaser Name</TableCell>
            <TableCell>Reservation hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoBooking.map(row => (
            <TableRow key={row.id}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell>
                {row.tableNumber}
              </TableCell>
              <TableCell>
                {row.purchaserName}
              </TableCell>
              <TableCell>
                {row.reservationHours}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);


export default Homepage;
