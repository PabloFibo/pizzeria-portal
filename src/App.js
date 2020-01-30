import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import WaiterView from './components/views/WaiterView/WaiterView';
import KitchenView from './components/views/KitchenView/KitchenView';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage}/>
          <Route path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
          <Route path={`${process.env.PUBLIC_URL}/tables`} component={Tables}/>
          <Route path={`${process.env.PUBLIC_URL}/waiter`} component={WaiterView}/>
          <Route path={`${process.env.PUBLIC_URL}/kitchen`} component={KitchenView}/>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
