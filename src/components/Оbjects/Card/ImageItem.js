import React from 'react';

export function ImageItem (props) {
   
    function handleClick() {
        props.onClick(props.src)
    }
    
    return (
      <img className="desc__photo_s" src={props.src} onClick={handleClick} alt="фото" />
  
    )
  }