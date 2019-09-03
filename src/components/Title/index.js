import React from "react";
import "./style.css";
import MarvelLogo from '../../marvel-icon.png';
const Title = props => {
  return (
    <div className='row header'>
      <div className='col-lg-4 col-sm-4 title text-center'>
      <div><img src={MarvelLogo} alt="marvel-icon" width="120"/></div>
        {props.children}
      </div>
      <div className='col-lg-4 col-sm-4 message text-center'><span>{props.message}</span></div>
      {/* <div className='col-lg-1 col-sm-1'></div> */}
      <div className='col-lg-2 col-sm-2 scores text-center'>
        Score: {props.score}
      </div>
      <div className='col-lg-2 col-sm-2 scores text-center'>Highscore: {props.highscore}</div>
    </div>
  );
};

export default Title;
