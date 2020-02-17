import React from 'react';
import styles from './KitchenView.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import IconButton from '@material-ui/core/IconButton';

const demoContent = [
  {order: 1, tableNumber: 2, orderDetails: 'Salad, Ingredients: Tomatoes, Feta cheese, Black pepper'},
  {order: 2, tableNumber: 3, orderDetails: 'Pizza, Sauce: Sour Cream, Toppings: Red peppers, Fresh basil, Salami'},
  {order: 3, tableNumber: 'N/A', orderDetails: 'Pizza, Crust: thin, Sauce: Tomato, Toppings: Green peppers, Mushrooms, Fresh basil'},
  {order: 4, tableNumber: 4, orderDetails: 'Breakfast, Coffee: Macchiato'},
  {order: 5, tableNumber: 'N/A', orderDetails: 'Cake, Coffee: Espresso'},
  {order: 6, tableNumber: 3, orderDetails: 'Pizza, Crust: wholewheat, Toppings: Red peppers, Salami, Fresh basil'},
];

const KitchenView = () => (

  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Details</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.order}>
            <TableCell component='th' scope='row'>
              {row.order}
            </TableCell>
            <TableCell>
              {row.tableNumber}
            </TableCell>
            <TableCell>
              {row.orderDetails}
            </TableCell>
            <TableCell>
              <IconButton size='small' >
                <CheckCircleOutlineIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default KitchenView;
