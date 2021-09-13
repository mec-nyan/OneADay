import Tile from './tile';
import gnu from './img/heckert_gnu.transp.small.png';
import ubuntu from './img/cof_orange_hex.png';
import './board.css';


export default function Board({ level }) {
  const tiles = [];
  for (let i = 0; i < 24; ++i) {
    tiles.push(<Tile back={gnu} front={ubuntu} />);
  }

  return (
    <div className='board'>
      {tiles}
    </div> 
  );
}
