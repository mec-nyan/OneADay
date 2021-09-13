import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import './board.css';
import Tile from './tile';
import Nav from '../nav';
import { NavLink } from 'react-router-dom';


const arrowLeft = <NavLink className='link' activeClassName='active' to='/'><FontAwesomeIcon icon={faArrowLeft}/></NavLink>;
const bars = <FontAwesomeIcon icon={faBars}/>;


export default function Board({ front, back, number, t }) {

  return (
    <div className='board'>
      <Nav left={arrowLeft} right={bars}/>
      {/*t.map(n => <Tile number={true} front={n} back={back} />)*/}
    </div>
  );
}
