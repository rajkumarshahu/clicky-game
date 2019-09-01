import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className='card animated bounce delay-2s' onClick={() => props.suffleCard(props.id)}>
      <div className='img-container'>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;
