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

import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const demoBooking = [
  {id: 1, tableNumber: 2, purchaserName: 'Samson', reservationStart: '17:30', reservationEnd: '19:00'},
  {id: 2, tableNumber: 3, purchaserName: 'Tony', reservationStart: '14:00', reservationEnd: '18:00'},
  {id: 3, tableNumber: 4, purchaserName: 'Pedro', reservationStart: '18:00', reservationEnd: '21:00'},
  {id: 4, tableNumber: 4, purchaserName: 'Olaf', reservationStart: '12:30', reservationEnd: '15:00'},
  {id: 5, tableNumber: 2, purchaserName: 'David', reservationStart: '12:00', reservationEnd: '13:30'},
  {id: 6, tableNumber: 3, purchaserName: 'Willy', reservationStart: '19:30', reservationEnd: '23:30'},
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
            <Scheduler
              data={demoBooking}
            >
              <ViewState />
              <DayView
                startDayHour={12}
                endDayHour={24}

              />
              <Appointments />
            </Scheduler>
            {/*time.map(row => (
              <TableRow key={row}>
                <TableCell component='th' scope='row'>
                  {row}{console.log(row)}
                </TableCell>
                {demoBooking.map(reserv => (
                  <TableCell key={reserv.id}>
                    {reserv.tableNumber === 2 ? reserv.tableTwo : null && reserv.reservationStart === row ? reserv.reservationStart : null}
                    {/*reserv.reservationStart === row ? reserv.reservationStart : null}
                  </TableCell>
                ))}
              </TableRow>
            ))*/}

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
