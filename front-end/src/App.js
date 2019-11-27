import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { Router, BrowserRouter } from 'react-router-dom';
import history from './services/history'

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
