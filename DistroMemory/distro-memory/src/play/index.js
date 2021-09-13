import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import Nav from '../nav';
import Board from './board';
import './play.css';


export default function Play() {
  const arrowLeft = <NavLink className='link' activeClassName='active' to='/'><FontAwesomeIcon icon={faArrowLeft}/></NavLink>;
  const [ state, setState ] = useState({ level: 1, score: 0 });

  return (
    <div className='play'>
      <Nav left={arrowLeft} center={<div>Level {state.level}</div>} right={<div>{state.score}</div>} />
      <Board level={1} />
    </div>
  );
}
