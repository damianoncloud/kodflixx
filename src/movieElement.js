import React from 'react';



export default function MovieElement(props) {
    return (
      <div className="item">
        <img src={props.image} alt={props.name}/>
        <div class="overlay">
          <h3 class="text">
            {props.name}
          </h3>
        </div>
      </div>
    );
}