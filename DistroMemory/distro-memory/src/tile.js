import './tile.css';
import { useState } from 'react';


export default function Tile() {
  const [ state, setState ] = useState({ flipped: false,
  });

  function flip() {
    setState({ flipped: !state.flipped });
  }

  return (
    <div className="flip-tile" onClick={flip}>
      <div className={"inner-tile " + (state.flipped ? "flipped" : "")}>
        <div className="tile-front">
        </div> 
        <div className="tile-back">
          <img src="../public/img/cof_orange_hex.png" />
        </div> 
      </div> 
    </div>  
  );
}
