import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import Nav from '../nav';
import './home.css';


const star = <FontAwesomeIcon icon={faStar}/>;
const bars = <FontAwesomeIcon icon={faBars}/>;
const exit = <FontAwesomeIcon icon={faBars}/>;

export default function Home() {

  return (
    <div className='home'>
      <Nav left={bars} center='Distro memory' bars={bars}/>
      <NavLink className='startBtn' to='/board'>
        <span className='rotate'>{star}</span>
        <span>Start</span>
        <span className='rotate'>{star}</span>
      </NavLink>
    </div> 
  );
}
