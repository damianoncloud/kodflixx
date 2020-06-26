import React from 'react';
import logo from './immagine-home.jpeg';
import favMovie from './fav-movie-cover.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>
      <img src={favMovie} alt='fav-image' />
    </div>
  );
}

export default App;
