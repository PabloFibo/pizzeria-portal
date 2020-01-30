import React from 'react';
import styles from './WaiterView.module.scss';
import { Link } from 'react-router-dom';

const WaiterView = () => (

  <div className={styles.component}>
    <ul>
      <li>
        <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New order</Link>
      </li>
      <h2>Waiter view</h2>
      <li>
        <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`}>Order</Link>
      </li>
    </ul>
  </div>
);

export default WaiterView;
