// == Import
import reactLogo from './react-logo.svg';
import Dice from 'src/containers/App/Dice';
import JumanjiText from 'src/containers/App/JumanjiText';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Dice />
    <JumanjiText />
  </div>
);

// == Export
export default App;
