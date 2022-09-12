import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import Countdown from 'react-countdown';
import { useForm } from 'react-hook-form';
import { setNewPlayerPosition, setDiceMessageAndForm } from 'src/selectors/toggleClass';

import './style.scss';
import './watereffect.scss';

const Gameboard = ({ hasGameBegun, players, currentPlayer}) => {
  
    // State
    const {
      currentDanger,
    } = useSelector((state) => state.app);

    // console.log(currentDanger);
  
    // Dispatch to be used when we need to dispatch the actions
    const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm();

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

  const Completionist = () => {
    const buttonElement = document.getElementById('beast-button');
    if (buttonElement !== null) {
      buttonElement.style.display = 'none';
    }
    
    return <button type="button" onClick={handleTooLateClick}>Trop tard</button>
  };

const handleTooLateClick = () => {
  // apply health damage

  
  setDiceMessageAndForm();
}

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{minutes}:{seconds}</span>;
  }
};

  // const divStyle = {
  //   'top': '48%',
  //   'right': '49%'
  // }
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
      {/* <div className='gameboard__waves gameboard__waves--hidden' />
      <div className='gameboard__post-dice gameboard__post-dice--hidden'>
        <div className='gameboard__post-dice-message'>
          <img src="https://images2.imgbox.com/fe/f3/J82a3AQU_o.png" alt="" />
          <div className='gameboard__post-dice-message-riddle'>
              <p>{riddles.map((line) => <span>{line}</span>)}</p>
          </div>
        </div>
        <form className="gameboard__post-dice-message-form" onSubmit={handleSubmit(onSubmit)}>
          <p>Vous êtes attaqués ! Devinez ce qui vous tombe dessus avant la fin du temps imparti pour éviter de vous blesser.</p>
          <p>Attention ! Certaines créatures sont plus rapides que d'autres. Il vous faudra répondre bien plus rapidement.</p>
          <input
            placeholder="Qu'est-ce qui vous attaque ?"
            className="gameboard__post-dice-message-form__input"
            {...register('beast', {
              required: "Si vous ne trouvez pas, vous risquez gros.",
            })}
          />
          {errors.beast && <p className="login__form-error">{errors.beast.message}</p>}
          {/* {authErrors.length > 0 && <p className="login__form-auth-error">{authErrors[0]}</p>} 
          <div className="gameboard__post-dice-message-form__button">
            <Countdown
              date={Date.now() + 1000 }
              renderer={renderer}
            />
            <button id="beast-button" type="submit">Valider ma proposition</button>
          </div>
      </form>
      </div> */}
    </div>
  );
}

Gameboard.propTypes = {

};

export default Gameboard;
