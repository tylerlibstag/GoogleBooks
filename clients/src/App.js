import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Saved from './pages/Saved';



function App() {
  return (
    
    <Router>
      <NavBar/>
      <div>
      
        <Switch>
          <Route exact path={["/", "/search"]} component={Main} />
          <Route exact path="/saved" component={Saved} />
          <Saved />
        </Switch>
        </div>
    </Router>
  );
}

export default App;

// https://www.googleapis.com/books/v1/volumes?q=