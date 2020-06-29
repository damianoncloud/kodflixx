import React from 'react';
import logo from './immagine-home.jpeg';
import favMovie from './fav-movie-cover.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>
      <img src={favMovie} alt='fav-image' />
      
      <div className="movie-container">
        <div className="item">Black Diamonds</div>
        <div className="item">Parasite</div>
        <div className="item">Enemy of the State</div>
      </div>  
      <div className="movie-container">  
        <div className="item">The Teory of everything</div>
        <div className="item">Hitch</div>
        <div className="item">Knives out</div>
      </div>
      

    </div>
  );
}   

export default App;
