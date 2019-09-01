import React from "react";
import "./style.css";

const Title = props => {
  return (
    <div className='row header'>
      <div className='col-lg-4 col-sm-4 title text-center'>{props.children}</div>
      <div className='col-lg-4 col-sm-4 text-center'>{props.message}</div>
      <div className='col-lg-4 col-sm-4 scores text-center'>
        Score: {props.score} Highscore: {props.highscore}
      </div>
    </div>
  );
};

export default Title;
