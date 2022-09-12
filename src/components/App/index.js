// == Import
import reactLogo from './react-logo.svg';
import { useForm } from 'react-hook-form';
import Countdown from 'react-countdown';

import { useDispatch, useSelector } from 'react-redux';
import Dice from 'src/containers/App/Dice';
import './style.scss';
import History from 'src/containers/App/History';
import Gameboard from 'src/containers/App/Gameboard';
import Players from './Players';
import Rules from './Rules';

import {
  saveGuess
} from '../../reducers/app';

// == Composant
const App = () => {
  
  // State
  const {
    guess,
    currentDanger,
  } = useSelector((state) => state.app);

  const { beast } = currentDanger;

  // Dispatch to be used when we need to dispatch the actions
  const dispatch = useDispatch();

  const validatorArray = (beast, guess) => {
    const length = beast.length;

    // TODO : change if <5
    const fullThird = beast.length / 3;
    
    const third = Math.ceil(fullThird);
    const arr = [third, third, length - (2 * third)];
    return arr;
  }
  let validationArray = [];
  let truc = 0;
  if (beast) {
    validationArray = validatorArray(beast, guess);
    const lol = beast.slice(0, guess.length);
    
    let goodLettersNumber = 0;
    if (lol.toLowerCase() === guess.toLowerCase() && lol !== '') {
      goodLettersNumber++;
    }

    const calc = (goodLettersNumber * 100 ) / beast.length; 
    truc = calc * guess.length;
  }


  const handleChange = (event) => {
    dispatch(saveGuess(event.target.value));
  }

  const handleTooLateClick = () => {
    // apply health damage
    setDiceMessageAndForm();
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to Jumanji ! </h1>
        <div />
      </header>
      <main>
        <section className="menu">
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
              <div className='guess__validator-gauge' style={{width: `${truc}%`}}></div>
            </div>
            {/* {errors.beast && <p className="login__form-error">{errors.beast.message}</p>} */}
            {/* {authErrors.length > 0 && <p className="login__form-auth-error">{authErrors[0]}</p>} */} 
            <div className="gameboard__post-dice-message-form__button">

              <button id="beast-button" type="button">Valider ma proposition</button>
            </div>
        </form>
        </section>
        <section className="game">
          <Gameboard />
        </section>
        <section className="menu">
          <Rules />
          <Players />
          <Dice />
          <History />
        </section>
      </main>
    </div>
  );
};

// == Export
export default App;
