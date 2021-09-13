import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../home';
import Play from '../play';
import Score from '../score';
import Quit from '../quit';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/play'>
            <Play />
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
