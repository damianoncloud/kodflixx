import React from 'react';
import logo from './immagine-home.jpeg';
import favMovie from './fav-movie-cover.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Welcome to Koflix
        </h2>
        <h4>Find your movie!</h4>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Register</button> 
        </a>
        <img src={favMovie} />
      </header>
    </div>
  );
}

export default App;
