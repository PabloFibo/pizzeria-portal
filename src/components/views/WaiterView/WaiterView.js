import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterView.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class WaiterView extends React.Component {
  static propTypes = {
    fetchTable: PropTypes.func,
    changeStatus: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  }

  componentDidMount() {
    const { fetchTable } = this.props;
    fetchTable();
  }

  renderActions(id, status) {
    const { changeStatus } = this.props;
    console.log('stat', status);
    switch (status) {
      case 'free':
        return (
          <Button onClick={() => changeStatus(id, 'thinking')} color='primary'>thinking</Button>
        );
      case 'thinking':
        return (
          <Button onClick={() => changeStatus(id, 'new order')} color='primary'>new order</Button>
        );
      case 'new order':
        return (
          <Button onClick={() => changeStatus(id, 'ordered')} color='primary'>ordered</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => changeStatus(id, 'prepared')} color='primary'>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => changeStatus(id, 'delivered')} color='primary'>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => changeStatus(id, 'paid')} color='primary'>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => changeStatus(id, 'free')} color='primary'>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return(
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.id, row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default WaiterView;
