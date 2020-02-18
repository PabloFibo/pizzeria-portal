import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import WaiterView from './components/views/WaiterView/WaiterView';
import KitchenView from './components/views/KitchenView/KitchenView';
import store from './redux/store.js';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2b4c6f',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage}/>
                <Route path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                <Route path={`${process.env.PUBLIC_URL}/tables`} component={Tables}/>
                <Route path={`${process.env.PUBLIC_URL}/waiter`} component={WaiterView}/>
                <Route path={`${process.env.PUBLIC_URL}/kitchen`} component={KitchenView}/>
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
