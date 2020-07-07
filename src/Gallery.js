import React from 'react';
import MovieElement from './movieElement.js';
import bloodDiamond from './images/blood-diamonds-cover.jpg';
import parasite from './images/parasite-cover.jpg';
import enemy from './images/enemy-cover.jpg';
import theory from './images/fav-movie-cover.jpg';
import rocket from './images/rocketman.jpg';
import knives from './images/knives.png';


export default function Gallery() {
    return (
      <div>
        <div className="movie-container">
          <MovieElement name="Blood Diamond" image={bloodDiamond} />
          <MovieElement name="Parasite" image={parasite} />
          <MovieElement name="Enemy of the State" image={enemy} />
        </div>
  
        <div className="movie-container">
          <MovieElement name="The Theory of Everything" image={theory} />
          <MovieElement name="Rocketman" image={rocket} />
          <MovieElement name="Knives out" image={knives} />
        </div>
    </div>
    )
  }