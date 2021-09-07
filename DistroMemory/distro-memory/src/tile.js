import './tile.css';
import { useState } from 'react';


export default function Tile() {
  const [ state, setState ] = useState({ flipped: false,
  });

  function flip() {
    setState({ flipped: !state.flipped });
  }

  return <div className={'token ' + (state.flipped ? 'green' : 'steelblue')} onClick={flip}></div>;
}
