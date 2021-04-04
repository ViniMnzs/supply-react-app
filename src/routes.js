import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main';
import History from './pages/History';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/list' component={History}/>
      </Switch>
    </BrowserRouter>
  )
}