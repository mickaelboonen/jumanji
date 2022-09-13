// == Import
import { useDispatch, useSelector } from 'react-redux';
import Dice from 'src/containers/App/Dice';
import History from 'src/containers/App/History';
import Gameboard from 'src/containers/App/Gameboard';
import Players from './Players';
import Rules from './Rules';

import './style.scss';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

// == Composant
const App = () => (
  <div className="app">
    <header className="header">
      <h1>Welcome to Jumanji ! </h1>
      <div />
    </header>
    <main>
      <LeftMenu />
      <section className="game">
        <Gameboard />
      </section>
      <RightMenu />
    </main>
  </div>
);

// == Export
export default App;
