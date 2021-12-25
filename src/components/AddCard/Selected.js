import React from 'react';

export function Selected (props) {

  return (
    <option onChange={props.onChange}>{props.item}</option>
   
  )
}

