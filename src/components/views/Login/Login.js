import React from 'react';
import styles from './Login.module.scss';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => (

  <div className={styles.component}>
    <h2>Login</h2>
    <TextField
      id='outlined-login-input'
      label='Login'
      type='login'
      autoComplete='current-login'
      variant='outlined'
    />
    <h2>Password</h2>
    <TextField
      id='outlined-password-input'
      label='Password'
      type='password'
      autoComplete='current-password'
      variant='outlined'
    />
    <h2 className={styles.link}>
      <Button color='primary' size='large' variant='contained' component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Login</Button>
    </h2>
  </div>
);

export default Login;
