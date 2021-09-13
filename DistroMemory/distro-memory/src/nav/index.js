import './nav.css';

export default function Nav(props) {
  const elements = [];
  for (let p in props) {
    elements.push(props[p]);
  }
  return (
    <nav className='nav'>
      {elements}
    </nav> 
  );
}
