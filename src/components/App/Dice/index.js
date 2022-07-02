import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// only arrow functions for named components
// [2, { "namedComponents": "arrow-function" }]
const Dice = ({ showDiceResults}) => {
  const number = 4;
  const throwDice = () => {
    showDiceResults(number)
  };
  return (
    <div>
      <button type="button" onClick={throwDice}>Throw Dice</button>
    </div>
  );
}

Dice.propTypes = {

};

export default Dice;

