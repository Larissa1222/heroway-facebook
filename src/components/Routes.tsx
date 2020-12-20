import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { PATHS } from '../config/constants';


import Feed from './pages/Feed';
import Login from './pages/Login';


function Routes(){
  return(
  <ReactRouterDOM.BrowserRouter>

    <ReactRouterDOM.Switch>

      <ReactRouterDOM.Route path={PATHS.ROOT} exact={true}>
        <Login/>
      </ReactRouterDOM.Route>
      <ReactRouterDOM.Route path={PATHS.LOGIN}>
        <Login/>
      </ReactRouterDOM.Route>
      <ReactRouterDOM.Route path={PATHS.FEED}>
        <Feed/> 
      </ReactRouterDOM.Route>

    </ReactRouterDOM.Switch>
    
  </ReactRouterDOM.BrowserRouter>
  );
}

export default Routes;