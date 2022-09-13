import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveGuess,
  endFormTurn,
} from '../../../reducers/form';
import { endAppTurn } from '../../../reducers/app';

import './style.scss';

const Form = () => {
  
  // State
  const {
    // guess,
    currentDanger : { beast },
  } = useSelector((state) => state.app);
  const {
    guess,
    hasFound,
  } = useSelector((state) => state.form);

  // Dispatch to be used when we need to dispatch the actions
  const dispatch = useDispatch();

  let matchPercent = 0;
  if (beast) {
    const lol = beast.slice(0, guess.length);
    
    let goodLettersNumber = 0;
    if (lol.toLowerCase() === guess.toLowerCase() && lol !== '') {
      goodLettersNumber++;
    }

    const calc = (goodLettersNumber * 100 ) / beast.length; 
    matchPercent = calc * guess.length;
  }
  const handleChange = (event) => {
    dispatch(saveGuess({
      guess: event.target.value, 
      beast: beast,
    }));
  }

  const handleTooLateClick = () => {
    // apply health damage
    setDiceMessageAndForm();
  }

  const handleClick = () => {
    dispatch(endFormTurn());
    dispatch(endAppTurn());
  }

  return (
    <form className="gameboard__post-dice-message-form">
      <p>Vous êtes attaqués ! Devinez ce qui vous tombe dessus avant la fin du temps imparti pour éviter de vous blesser.</p>
      <p>Attention ! Certaines créatures sont plus rapides que d'autres. Il vous faudra répondre bien plus rapidement.</p>
      <input
        placeholder="Qu'est-ce qui vous attaque ?"
        className="gameboard__post-dice-message-form__input"
        onChange={handleChange}
        // {...register('beast', {
        //   required: "Si vous ne trouvez pas, vous risquez gros.",
        // })}
      />
      <div className='guess__validator'>
        <div className='guess__validator-gauge' style={{width: `${matchPercent}%`}}></div>
      </div>
      <div className="gameboard__post-dice-message-form__button">
        {hasFound && (
          <button
            id="beast-button"
            type="button"
            onClick={handleClick}
          >
            Suivant
          </button>
        )}
      </div>
    </form>
  );
};

Form.propTypes = {

};

export default Form;
