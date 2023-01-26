import './App.css';
import Player from './components/Player';
import CardList from './components/CardList';
import ExecutePassButton from './components/ExecutePassButton';
import { useContext } from 'react';
import { GameContext } from './Context/GameContext.js';

function App() {
  const { selectedCard, passCard, playerOneHand, playerTwoHand, playerThreeHand, deck } = useContext(GameContext);


  return (
    <div className="App">
      <section>
        <Player
          player={1}
          hand={playerOneHand}
          selectedCard={selectedCard}
        />
        <Player
          player={2}
          hand={playerTwoHand}
          selectedCard={selectedCard}
        />
        <Player
          player={3}
          hand={playerThreeHand}
          selectedCard={selectedCard}
        />
        <CardList
          cards={deck}
          selectedCard={selectedCard}
          player={'deck'}
        />
      </section>
      <section>
        {selectedCard && (
          <ExecutePassButton
            passCard={passCard}
            selectedCard={selectedCard} 
          />
        )}
      </section>
    </div>
  );
}

export default App;
