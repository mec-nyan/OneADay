import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import Nav from '../nav';
import './home.css';


const star = <FontAwesomeIcon icon={faStar}/>;

export default function Home() {

  return (
    <div className='home'>
      <Nav />
      <NavLink className='startBtn' to='/board'>
        <span className='rotate'>{star}</span>
        <span>Start</span>
        <span className='rotate'>{star}</span>
      </NavLink>
    </div> 
  );
}
