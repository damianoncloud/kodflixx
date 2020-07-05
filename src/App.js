import React from 'react';
import bloodDiamond from './images/blood-diamonds-cover.jpg';
import parasite from './images/parasite-cover.jpg';
import enemy from './images/enemy-cover.jpg';
import theory from './images/fav-movie-cover.jpg';
import rocket from './images/rocketman.jpg';
import knives from './images/knives.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>
      
      <div className="movie-container">
        <div className="item">
          <img src={bloodDiamond} alt='blook-diamond'/>
          <div class="overlay">
            <h1 class="text">
              Blood Diamond
            </h1>
          </div>
        </div>
        <div className="item">
          <img src={parasite} alt='parasite'/>
          <div class="overlay">
            <h1 class="text">
              Parasite
            </h1>
          </div>
        </div>
        <div className="item">
          <img src={enemy} alt='enemy-of-state'/>
          <div class="overlay">
            <h1 class="text">
              Enemy of the State 
            </h1>
          </div>
        </div>
      </div>  

      <div className="movie-container">  
        <div className="item">
          <img src={theory} alt='theory-of-everything'/>
          <div class="overlay">
            <h1 class="text">
              The Theory of everything
            </h1>
          </div>
        </div>
        <div className="item">
          <img src={rocket} alt='rocketman'/>
          <div class="overlay">
            <h1 class="text">
              Rocketman
            </h1>
          </div>
        </div>
        <div className="item">
          <img src={knives} alt='knives'/>
          <div class="overlay">
            <h1 class="text">
              Knives out
            </h1>
          </div>
        </div>
      </div>
      

    </div>
  );
}   

export default App;
