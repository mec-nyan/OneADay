import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from '../nav';
import Home from '../home';
import Board from '../board';
import Score from '../score';
import Quit from '../quit';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

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
