import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/board'>
          <Board />
        </Route>

        <Route exact path='/score'>
          <Score />
        </Route>

        <Route exact path='/quit'>
          <Quit />
        </Route>

      </Switch>
    </BrowserRouter>
  </div>
);
}

export default App;
