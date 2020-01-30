import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (

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
);

export default Tables;
