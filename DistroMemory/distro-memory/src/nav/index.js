import './nav.css';

export default function Nav({ left, center, right }) {
  return (
    <nav className='nav'>
      {[left, center, right]}
    </nav> 
  );
}
