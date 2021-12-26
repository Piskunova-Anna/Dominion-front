import React from 'react';

export function SelectedMetro (props) {

  return (
    <option onChange={props.onChange}>{props.item}</option>
   
  )
}

