import React from "react";
import Cards from '../Cards/Cards';

//Список для страницы квартиры
function FlatsList(props) {
  const cards = props.cards
  return (
    <div>
        {cards.map((card)=> (
        <Cards card={card} onCardDelete={props.onCardDelete} key={card._id}/>
      ))}
     </div>
  );
}

export default FlatsList;