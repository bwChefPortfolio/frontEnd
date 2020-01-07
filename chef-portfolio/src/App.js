import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import Header from './components/Header/header';
import LogIn from './components/Registration/login';
import SignUp from './components/Registration/signup';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/profile' component={Portfolio} />
        <Route path='/login' component={LogIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
