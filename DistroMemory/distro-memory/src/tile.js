import './tile.css';
import ubuntu from './img/cof_orange_hex.png';
import gnu from './img/heckert_gnu.transp.small.png';
import { useState } from 'react';


export default function Tile({ front, back }) {
  const [ state, setState ] = useState({ flipped: false,
  });

  function flip() {
    setState({ flipped: !state.flipped });
  }

  return (
    <div className="flip-tile" onClick={flip}>
      <div className={"inner-tile " + (state.flipped ? "flipped" : "")}>
        <div className="tile-front">
          <img src={back} alt="" />
        </div> 
        <div className="tile-back">
          <img src={front} alt=""/>
        </div> 
      </div> 
    </div>  
  );
}
