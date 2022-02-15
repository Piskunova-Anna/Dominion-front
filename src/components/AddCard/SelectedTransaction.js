import React from 'react';

export function SelectedTransaction (props) {

  return (
    <option onChange={props.onChange}>{props.item}</option>
   
  )
}
