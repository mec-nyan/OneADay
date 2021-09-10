import './App.css';
import FancyButton from './fancyButton';
import Tile from './tile';
import Board from './board';

// >> Images
import ubuntu from './img/cof_orange_hex.png';
import gnu from './img/heckert_gnu.transp.small.png';
import nyan from './img/git.png';
import gnuw from './img/heckert_gnu.transp.small_white.png';


// >> Temp numbers
const t = [];
for (let i = 0; i < 24; ++i) {
  t.push(i);
  t.push(i);
}

function App() {
return (
  <div className="App">
    <p>
      Distro Memory
    </p>
    {/*
    <FancyButton text="Fancy"/>
    <FancyButton text="Button"/>
    <FancyButton text="Yet"/>
    <FancyButton text="Another one"/>

    <Tile front={ubuntu} back={gnu}/>
    <Tile front={nyan} back={gnu}/>
    */}

    <Board back={gnu} number={true} t={t} />

  </div>
);
}

export default App;
