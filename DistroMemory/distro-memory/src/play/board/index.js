import Tile from './tile';
import gnu from './img/heckert_gnu.transp.small.png';
import ubuntu from './img/cof_orange_hex.png';
import debian from './img/openlogo-nd.png';
import arch from './img/arch.png';
import fedora from './img/fedora.png';
import centos from './img/centos.png';
import slack from './img/slackware.png';
import './board.css';


export default function Board({ level }) {
  let logos = [ ubuntu, debian, arch, fedora, centos, slack ];
  logos = [ ...logos, ...logos, ...logos, ...logos ];
  let tiles = [];
  tiles = logos.map(logo => <Tile back={gnu} front={logo} />);
  shuffle(tiles);

  return (
    <div className='board'>
      {tiles}
    </div> 
  );
}


function shuffle(arr) {
  console.log(arr);
  let element;
  for (let i = 0; i < arr.length; ++i) {
    let j = Math.floor(Math.random() * arr.length);
    [ element ] = arr.splice(j, 1);
    arr.push(element);
  }
  console.log(arr);
}
