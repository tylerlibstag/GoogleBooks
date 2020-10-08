import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Saved from './pages/Saved';


function App() {
  return (
    <Router>
        
        <Switch>
          <Route exact path={["/", "/search"]} component={Main} />
          <Route exact path="/saved" component={Saved} />
          <Saved />
        </Switch>
    </Router>
  );
}

export default App;

// https://www.googleapis.com/books/v1/volumes?q=