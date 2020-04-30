import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './index.scss';

import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/user/Login/Login';
import Register from './containers/user/Register/Register';
import Profile from './containers/user/Profile/Profile';
import User from './containers/user/User/User';
import PostList from './containers/post/Posts/PostList';
import UserList from './containers/user/Users/UserList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={PostList} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/profile' component={Profile} exact />
          <Route path='/users' component={UserList} exact />
          <Route path='/user/:id' component={User} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;