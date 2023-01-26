import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../Context/GameContext.js';

const suitMap = {
  hearts: '❤️',
  spades: '♠️',
  clubs: '♣️',
  diamonds: '♦️',
};

export default function Card({ card, player }) {
  const { setSelectedCard, selectedCard, setFrom } = useContext(GameContext);
  function handleCardClick() {
    setFrom(player);
    setSelectedCard(card);
  }
  
  const thisIsTheSelectedCard = selectedCard && selectedCard.value === card.value && selectedCard.suit === card.suit;


  return (
    <div className={`${thisIsTheSelectedCard ? 'selected' : ''} card`} 
      onClick={handleCardClick}>
      <div>{suitMap[card.suit]}</div>
      <div>{card.value}</div>
    </div>
  );
}
