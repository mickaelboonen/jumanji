// == Import
import reactLogo from './react-logo.svg';
import Dice from 'src/containers/App/Dice';
import DiceResults from 'src/containers/App/DiceResults';
import './style.scss';
import Gameboard from 'src/containers/App/Gameboard';
import Players from './Players';
import Rules from './Rules';
import History from './History';

// == Composant
const App = () => (
  <div className="app">
    <header className="header">
      Welcome to Jumanji ! 
    </header>
    <main>
      <section className="game">
        <Gameboard />
      </section>
      <section className="menu">
        <Players />
        <Dice />
        <Rules />
      </section>
      <History />
    </main>
  </div>
);

// == Export
export default App;
