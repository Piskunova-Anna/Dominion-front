import React from "react";
import Cards from './Cards/Cards';
import { filtrPublic, filtrType} from '../../utils/auxiliary'
import "./Cards/Cards.css";

//Список для страницы квартиры
function ObjectList(props) {
  const [cards, setCards] = React.useState(props.cards)
  const [cardsPage, setCardsPage] = React.useState(0);
  const [nextCards, setNextCards] = React.useState(0);
  const [objectShow, setObjectShow] = React.useState([]);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  function checkWindowWidth() {
    setTimeout(() => setWindowWidth(window.innerWidth), 500);
  };

//вывод на странице, только опубликованных объявлений
React.useEffect(()=> {
  setCards(filtrType(filtrPublic(props.cards), props.type))
  }, [props.cards, props.type])

React.useEffect(()=> {
  quantityObjects(0, cardsPage)
},[ cardsPage, cards])

React.useEffect(()=> {
  window.addEventListener('resize', checkWindowWidth);
  if(window.innerWidth > 850) {
      setCardsPage(5);
      setNextCards(5);
    } else if(window.innerWidth > 500 && window.innerWidth <= 849) {
      setCardsPage(4);
      setNextCards(4);
    } else if(window.innerWidth < 500) {
      setCardsPage(3);
      setNextCards(3);
    }
    return () => window.removeEventListener('resize', checkWindowWidth);

}, [windowWidth])


// меняет количество добавленных карточек
function handleNextClick() {
  quantityObjects(0, objectShow.length + nextCards)
}

function quantityObjects(start, finish) {
  setObjectShow(cards.slice(start,finish))
}
  

  return (
    <section className='card-list'>
      {cards.length > 0 ? objectShow.map((card)=> (
        <Cards card={card} 
        onCardDelete={props.onCardDelete} 
        onCardEdit={props.onCardEdit} 
        onCardHide={props.handleHideCard} 
        key={card._id}/>
      ))
      : <p className="card-list_text">Ничего не найдено</p>
      }
      {cards.length > 5  &&
        <div className="cards__next">
          <button onClick={handleNextClick} className="cards__button" >Ещё</button>  
        </div>
      }
     </section>
  );
}

export default ObjectList;