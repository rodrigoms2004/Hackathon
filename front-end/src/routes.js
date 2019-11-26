import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importando os pages
import Login from './pages/Login';
import Register from './pages/Register';
import Game from './pages/Game';
import Tutorial from './pages/Game/Tutorial';
import Question from './pages/Game/Question';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/game" component={Game} />
        <Route path="/tutorial/:id" component={Tutorial} />
        <Route path="/question/:id" component={Question} />
      </Switch>
    </BrowserRouter>
  );
}
