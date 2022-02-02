import React from "react";
import Cards from '../Cards/Cards';
import { filtrPublic } from '../Auxiliary/auxiliary'

//Список для страницы квартиры
function FlatsList(props) {
  const [cards, setCards] = React.useState(props.cards)

  //вывод на странице квартир, только опубликованных объявлений
  React.useEffect(()=> {
    setCards(filtrPublic(props.cards)) 
    }, [props])


  return (
    <div>
        {cards.map((card)=> (
        <Cards card={card} 
        onCardDelete={props.onCardDelete} 
        onCardEdit={props.handleEditCard} 
        onCardHide={props.handleHideCard} 
        key={card._id}/>
      ))}
     </div>
  );
}

export default FlatsList;