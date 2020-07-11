import React from 'react';
import { Link } from 'react-router-dom';


export default function MovieElement(props) {
    return (
      <Link to='/details' className="item">
        <img src={props.image} alt={props.name}/>
        <div class="overlay">
          <h3 class="text">
            {props.name}
          </h3>
        </div>
      </Link>
    );
}