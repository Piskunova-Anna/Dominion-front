import React from "react";

import Flats from './Flats';

//Список для страницы квартиры
function FlatsList(props) {
  return (
    <Flats cards={props.cards} onCardDelete={props.onCardDelete} />
  );
}

export default FlatsList;