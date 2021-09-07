import './App.css';
import FancyButton from './fancyButton';
import Tile from './tile';

function App() {
return (
  <div className="App">
    <p>
      Distro Memory
    </p>
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <FancyButton text="Fancy"/>
    <FancyButton text="Button"/>
    <FancyButton text="Yet"/>
    <FancyButton text="Another one"/>

    <Tile />

  </div>
);
}

export default App;
