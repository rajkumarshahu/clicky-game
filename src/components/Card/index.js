import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className= 'card remove' onClick={() => props.suffleCard(props.id)}>
      <div className='img-container'>
        <img  className={props.class} alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;
