import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './home.css';


const star = <FontAwesomeIcon icon={faStar}/>;

export default function Home() {

  return (
    <div className='home'>
      <button className='startBtn'>
        <span className='rotate'>{star}</span>
        <span>Start</span>
        <span className='rotate'>{star}</span>
      </button>
    </div> 
  );
}
