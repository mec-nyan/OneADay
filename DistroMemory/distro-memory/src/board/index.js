import './board.css';
import Tile from './tile';


export default function Board({ front, back, number, t }) {

  return (
    <div className='board'>
      {t.map(n => <Tile number={true} front={n} back={back} />)}
    </div>
  );
}
