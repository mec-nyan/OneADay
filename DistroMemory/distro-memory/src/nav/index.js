import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './nav.css';

export default function Nav() {

  return (
    <nav className='nav'>
      <span>Distro memory</span>
      <FontAwesomeIcon icon={faBars} />
    </nav> 
  );
}
