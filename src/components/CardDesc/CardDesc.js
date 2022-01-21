import React from "react";
import "./CardDesc.css";
import CardList from "../CardList/CardList";
import { useParams } from 'react-router-dom';
import ImageBlocks from '../Auxiliary/ImageBlocks'

function CardDesc(props) {
  let { id } = useParams();
  let cards = props.cards;
  const card = cards.find(f => f._id === id);
  console.log(card)
  return (
    <main className="desc">
      <div className="desc__block">
        <ImageBlocks onCardClick={props.onCardClick} image={card.image}/>
        <div className="desc__list">
          <CardList card={card} />
        </div>
      </div>
      <div>
        <h2 className="desc__title">Описание:</h2>
        <p className="desc__text">{card.description}</p>
      </div>
    </main>
  );
}

export default CardDesc;
