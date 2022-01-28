import React from "react";
import "./CardDesc.css";
import CardList from "../CardList/CardList";
import { useParams } from 'react-router-dom';
import ImageBlocks from '../Auxiliary/ImageBlocks'

function CardDesc(props) {
  let { id } = useParams();
  let cards = props.cards;
  const card = cards.find(f => f._id === id);
  const [cardData, setCardData] = React.useState()
  let localData = JSON.parse(localStorage.getItem('cards'))
 const newcard = props.cards.length > 0 ? card : localData
    React.useEffect(()=>{
      if(props.cards.length > 0) {
      localStorage.setItem("cards", JSON.stringify(card))
      setCardData(card)
      } else {
        setCardData(localData)
      }


      
    }, [])
    console.log(cardData)
  console.log(props.cards.length)
  console.log(localData)
  console.log(newcard)
  return (
    <main className="desc">
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
