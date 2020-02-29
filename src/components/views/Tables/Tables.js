import React, { useState } from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
  Toolbar,
  DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui';

const demoBooking = [
  {startDate: '2020-02-29 17:30', endDate: '2020-02-29 19:00', title: 'Samson, table 2'},
  {startDate: '2020-02-29 14:00', endDate: '2020-02-29 18:00', title: 'Tony, table 3'},
  {startDate: '2020-02-29 18:00', endDate: '2020-02-29 21:00', title: 'Pedro, table 4'},
  {startDate: '2020-02-29 12:30', endDate: '2020-02-29 15:00', title: 'Olaf, table 4'},
  {startDate: '2020-02-29 12:00', endDate: '2020-02-29 13:30', title: 'David, table 2'},
  {startDate: '2020-02-29 19:30', endDate: '2020-02-29 23:30', title: 'Willy, table 3'},
];

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
          <TableBody>
            <Scheduler
              data={demoBooking}
            >
              <ViewState
                defaultCurrentDate={new Date()} />
              <DayView
                startDayHour={12}
                endDayHour={24}
              />
              <Toolbar />
              <DateNavigator />
              <Appointments />
              <AppointmentTooltip />
            </Scheduler>
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
