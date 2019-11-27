import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importando os pages
import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
