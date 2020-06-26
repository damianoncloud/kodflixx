import React from 'react';
import logo from './immagine-home.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Welcome to Koflix
        </h2>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Register</button> 
        </a>
      </header>
    </div>
  );
}

export default App;
