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
    <form className="gameboard__form">
      <h4 className="gameboard__form-title">Identifie le danger</h4>
      <p className="gameboard__form-message">Vous êtes attaqués ! Devinez ce qui vous tombe dessus avant la fin du temps imparti pour éviter de vous blesser.</p>
      <p className="gameboard__form-message gameboard__form-message--alerte">Attention ! Certaines créatures sont plus rapides que d'autres. Il vous faudra répondre bien plus rapidement.</p>
      <input
        placeholder="Qu'est-ce qui vous attaque ?"
        className="gameboard__form-input"
        onChange={handleChange}
        // {...register('beast', {
        //   required: "Si vous ne trouvez pas, vous risquez gros.",
        // })}
      />
      <div className='gameboard__form-validator'>
        <div className='gameboard__form-validator-gauge' style={{width: `${matchPercent}%`}}></div>
      </div>
      {hasFound && (
        <button
          id="beast-button"
          type="button"
          className="gameboard__form-button"
          onClick={handleClick}
        >
          Suivant
        </button>
      )}
    </form>
  );
};

Form.propTypes = {

};

export default Form;
