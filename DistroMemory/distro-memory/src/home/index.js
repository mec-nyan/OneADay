import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import Nav from '../nav';
import './home.css';


const star = <FontAwesomeIcon icon={faStar}/>;
const bars = <FontAwesomeIcon icon={faBars}/>;
const close = <FontAwesomeIcon icon={faTimes}/>;

export default function Home() {

  return (
    <div className='home'>
      <Nav left={bars} center='Distro memory' right={close}/>
      <NavLink className='startBtn' to='/play'>
        <span className='rotate'>{star}</span>
        <span>Start</span>
        <span className='rotate'>{star}</span>
      </NavLink>
    </div> 
  );
}
