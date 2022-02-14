import React from 'react';
import './Pattern.css';


function Pattern(props) {

  return (
    <div className='pattern'>
    <div className='pattern__image'><span className="flare"></span></div>
    <div className='pattern__info'>
      <div className='pattern__feat'><span className="flare"></span></div>
      <div className='pattern__icon'><span className="flare"></span></div>
      <div className='pattern__icon2'><span className="flare"></span></div>
      <div className='pattern__icon3'><span className="flare"></span></div>
      <div className='pattern__desc'><span className="flare"></span></div>
    </div>
    </div>
  ) 
}

export default Pattern;