import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { setNewPlayerPosition } from 'src/selectors/toggleClass';

import './style.scss';

const Gameboard = ({ currentDanger, hasGameBegun, players, currentPlayer}) => {
  
  let riddles = [];
  if (currentDanger !== undefined) {
    riddles = currentDanger;
  }

  useEffect(() => {
    if (hasGameBegun) {
      const playerToMove = players.find((player) => player.name === currentPlayer);
      console.log(playerToMove);
      setNewPlayerPosition(playerToMove)
    }
  }, [players])

  return (
    <div className='gameboard'>
      <div className='gameboard__player gameboard__player--first' />
      <div className='gameboard__player gameboard__player--second' />
      <div className='gameboard__player gameboard__player--third' />
      <div className='gameboard__player gameboard__player--fourth' />
      <div className='gameboard__player gameboard__player--fifth' />
      <div className='gameboard__player gameboard__player--sixth' />
      <div className='gameboard__core'>
        <p className='gameboard__core-message'>
            {riddles.map((line) => <span>{line}</span>)}
        </p>
      </div>
    </div>
  );
}

Gameboard.propTypes = {

};

export default Gameboard;
