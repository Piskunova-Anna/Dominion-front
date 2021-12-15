import React from 'react';

//import './Selected.css'

export function Selected (props) {

  return (
    <option onChange={props.onChange}>{props.item}</option>
   
  )
}

