import React from "react";
import "./CardDesc.css";
import CardList from "../CardList/CardList";
import { useParams } from 'react-router-dom';
import ImageBlocks from '../Auxiliary/ImageBlocks'

function CardDesc(props) {
  let { id } = useParams();
  let cards = props.cards;
  const card = cards.find(f => f._id === id);
  //const [cardData, setCardData] = React.useState()
  let localData = JSON.parse(localStorage.getItem('cards'))
  const newcard = props.cards.length > 0 ? card : localData
    
  React.useEffect(()=>{
    if(cards.length > 0) {
      localStorage.setItem("cards", JSON.stringify(card))
    }
  }, [])

    //редактирование карточки
    function handleEditCard() {
      props.onCardEdit(newcard)
    }


  return (
    <main className="desc">
      <button onClick={handleEditCard} type="button" className='popup__edit'></button>
      <div className="desc__block">
        <ImageBlocks onCardClick={props.onCardClick} image={newcard.image}/>
        <div className="desc__list">
          <CardList card={newcard} />
        </div>
      </div>
      <div>
        <h2 className="desc__title">Описание:</h2>
        <p className="desc__text">{newcard.description}</p>
      </div>
    </main>
  );
}

export default CardDesc;
