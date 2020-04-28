import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/user/Login/Login';
import Register from './containers/user/Register/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header  />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
