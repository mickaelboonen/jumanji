// == Import
import reactLogo from './react-logo.svg';
import Dice from 'src/containers/App/Dice';
import './style.scss';
import History from 'src/containers/App/History';
import Gameboard from 'src/containers/App/Gameboard';
import Players from './Players';
import Rules from './Rules';

// == Composant
const App = () => (
  <div className="app">
    <header className="header">
      <h1>Welcome to Jumanji ! </h1>
      <div />
    </header>
    <main>
      <section className="menu">
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

// == Export
export default App;
