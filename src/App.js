import React from 'react';
import Gallery from './Gallery.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './Details.js';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Kodflix</h1>
        <Route exact path='/' component={Gallery} />
        <Route exact path='/:details' component={Details} />
      </div>
    </Router>
  );
}

export default App;


