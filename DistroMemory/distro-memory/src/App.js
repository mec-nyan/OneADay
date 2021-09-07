import './App.css';
import FancyButton from './fancyButton';
import Tile from './tile';

// >> Images
import ubuntu from './img/cof_orange_hex.png';
import gnu from './img/heckert_gnu.transp.small.png';
import nyan from './img/git.png';
import gnuw from './img/heckert_gnu.transp.small_white.png';


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

    <Tile front={ubuntu} back={gnu}/>
    <Tile front={nyan} back={gnu}/>

  </div>
);
}

export default App;
