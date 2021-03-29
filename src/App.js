import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvents from './components/AddEvents/AddEvents';
import Navber from './components/Navber/Navber';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
export const UserContext= createContext ();



function App() {
  const [loginUser, setLoginUser]= useState({});
  return (
    <div className="App container">
      <UserContext.Provider value={[loginUser,setLoginUser]}>

    <Router> 
       <Navber/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>

          <PrivateRoute path="/addEvents">
            <AddEvents/>
          </PrivateRoute>

          <Route path="/dashboard">
          </Route>
        </Switch>
      
    </Router>
    </UserContext.Provider>
    </div>
     
  );
}

export default App;