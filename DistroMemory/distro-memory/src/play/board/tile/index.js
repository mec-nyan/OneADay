import './tile.css';
import { useState } from 'react';


export default function Tile({ front, back, number }) {
  const [ state, setState ] = useState({ flipped: false,
  });

  function flip() {
    setState({ flipped: !state.flipped });
  }

  return (
    <div className="flip-tile" onClick={flip}>
      <div className={"inner-tile " + (state.flipped ? "flipped" : "")}>
        <div className="tile-back">
          <img src={back} alt="" />
        </div> 
        <div className="tile-front">
          {number ? <p>{front}</p> : <img src={front} alt=""/>}
        </div> 
      </div> 
    </div>  
  );
}
