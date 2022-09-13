import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { setNewPlayerPosition, setDiceMessageAndForm } from 'src/selectors/toggleClass';

import './style.scss';
// import './watereffect.scss';

const Gameboard = ({ hasGameBegun, players, currentPlayer}) => {
  
    // State
    const {
      currentDanger,
      isDangerOn,
    } = useSelector((state) => state.app);

    // console.log(currentDanger);
  
    // Dispatch to be used when we need to dispatch the actions
    const dispatch = useDispatch();

  const onSubmit = (data) => {
    // checkAuth(data);
    // console.log(data);
  };
  let riddles = [];
  let cooldown = 0;
  if (currentDanger !== undefined) {
    riddles = currentDanger;
  }
  if (currentDanger !== undefined) {
    cooldown = currentDanger.cooldown * 1000;
  }

  useEffect(() => {
    if (hasGameBegun) {
      const playerToMove = players.find((player) => player.name === currentPlayer);
      
      setNewPlayerPosition(playerToMove)
    }
  }, [players]);

const handleTooLateClick = () => {
  setDiceMessageAndForm();
}

  return (
    <div className='gameboard'>
      <div className='gameboard__player gameboard__player--first' />
      <div className='gameboard__player gameboard__player--second' />
      <div className='gameboard__player gameboard__player--third' />
      <div className='gameboard__player gameboard__player--fourth' />
      <div className='gameboard__player gameboard__player--fifth' />
      <div className='gameboard__player gameboard__player--sixth' />
      
      {currentDanger.riddle && <div className='gameboard__background' /> }
        <div className='gameboard__core'>
          <div>
            <p className='gameboard__core-message'>
              {currentDanger.riddle}
              <div className='gameboard__core-round'>
                <div className='gameboard__core-fog'/>
              </div>
            </p>
          </div>
        </div>
    </div>
  );
}

Gameboard.propTypes = {

};

export default Gameboard;
