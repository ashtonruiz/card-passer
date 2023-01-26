import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../Context/GameContext.js';
import Card from './Card';

export default function ExecutePassButton({
  passCard,
  setFrom,
}) {
  const { from, to, selectedCard } = useContext(GameContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setFrom={setFrom} /> from{' '}
      {from} to {to}
    </div>
  );
}
