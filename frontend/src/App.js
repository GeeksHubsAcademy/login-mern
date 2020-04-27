import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/user/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
