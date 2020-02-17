import React, { useState } from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const demoBooking = [
  {id: 1, tableNumber: 2, purchaserName: 'Samson', reservationHours: '17:30 - 19:00'},
  {id: 2, tableNumber: 3, purchaserName: 'Tony', reservationHours: '14:00 - 18:00'},
  {id: 3, tableNumber: 4, purchaserName: 'Pedro', reservationHours: '18:00 - 21:00'},
  {id: 4, tableNumber: 4, purchaserName: 'Olaf', reservationHours: '12:30 - 15:00'},
  {id: 5, tableNumber: 2, purchaserName: 'David', reservationHours: '12:00 - 13:30'},
  {id: 6, tableNumber: 3, purchaserName: 'Willy', reservationHours: '19:30 - 23:30'},
];

const time = [];

for ( let i = 720; i <= 1440; i += 30) {
  const hours = Math.floor([i] /60);
  const minutes = [i] %60;

  if (minutes === 0 ) {
    time.push(hours.toFixed(0) + ':00');
  } else {
    time.push(hours + ':' + minutes);
  }
}

const Tables = () => {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles.component}>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <h2> </h2>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
              <TableCell>Table 4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {time.map(row => (
              <TableRow key={row}>
                <TableCell component='th' scope='row'>
                  {row}
                </TableCell>
                {demoBooking.map(reserv => (
                  <TableCell component='th' scope='row' key={reserv.id}>
                    {reserv.reservationHours}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <div className={styles.component}>
        <ul>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New booking order</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New events order</Link>
          </li>
          <h2>Tables view</h2>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Booking order</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Events order</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tables;
