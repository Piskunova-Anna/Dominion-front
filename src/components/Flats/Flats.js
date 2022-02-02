import React from "react";
import Cards from '../Cards/Cards';

//Список для страницы квартиры
function Flats(props) {
  const [cards, setCards] = React.useState(props.cards)

  //Функция фильтрации опубликованных объявлений
  function filtrPublic(cards) {
    const publicCards = cards.filter((item) => {
      return item.active
    }) 
    return publicCards
  }

  //Функция фильтрации НЕопубликованных объявлений
  function filtrhidePublic(cards) {
    const publicCards = cards.filter((item) => {
      return !item.active
    }) 
    return publicCards
  }

  React.useEffect(()=> {
    if(props.public==="public") {
      setCards(filtrPublic(props.cards))
    } else if(props.public==="hidePublic") {
      setCards(filtrhidePublic(props.cards))
    } else {
      setCards(props.cards)
    }
    }, [props])

  return (
    <div>
    {cards.length!==0
    ? cards.map((card)=> (
      <Cards card={card} onCardEdit={props.handleEditCard} onCardHide={props.onCardHide} onCardDelete={props.onCardDelete} key={card._id}/>
    ))
    : <p className="flats__text">У Вас еще нет опубликованных карточек</p>
    }
     </div>
  );
}

export default Flats;