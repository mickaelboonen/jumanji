import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../Utils/Dropdown';
import {diceArray} from 'src/data/dice';

import './style.scss';

const Dice = ({ showDiceResults, setNewFoe, diceResults, setProgression }) => {
  const throwDice = () => {

    const countdown = 0;

    setTimeout(() => {
      setNewFoe();
    }, countdown);

    const firstRandomDice = (Math.floor(Math.random() * 6) + 1);
    const secondtRandomDice = (Math.floor(Math.random() * 6) + 1);
    const total = firstRandomDice + secondtRandomDice;

    showDiceResults(`${firstRandomDice}${secondtRandomDice}`);
    setProgression(total);
  };

  let diceToShow = 0;
  let altMessage = "";
  if (diceResults !== 0) {
    diceToShow = diceArray.find((currentDice) => diceResults=== currentDice.name);

    if ( diceToShow.name[0] === diceToShow.name[1]) {
      altMessage = `Le dé affiche un double ${diceToShow.name[0]}.`;
    }
    else {
      altMessage = `Le dé affiche un ${diceToShow.name[0]} et un ${diceToShow.name[1]}.`;
    }
   
  };
  
  return (
    <div className='dice'>
      <Dropdown name="dice" />
      <div className='dice__settings'>
        <button className='dice__settings-button' type="button" onClick={throwDice}>Throw Dice</button>
        {diceToShow !== 0 && <img className='dice__settings-image' src={diceToShow.image} alt={altMessage} />}
        {diceResults[0] === diceResults[1] && diceResults !==0  && <p className='dice__settings-message'>Tu as fait un double ! Rejoue !</p>}        
      </div>
    </div>
  );
}

Dice.propTypes = {

};

export default Dice;

