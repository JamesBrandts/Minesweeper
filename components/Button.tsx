import * as React from 'react';
import Lose from './Lose';
import Reveal from './Reveal';
import RevealAll from './RevealAll';
import Win from './Win';

export default function Button(props) {
  const content = props.content;
  const [marked, setMarked] = React.useState(false);
  return (
    <div
      onContextMenu={(e) => {
        setMarked(!marked);
        e.preventDefault();
      }}
      style={{
        margin: `${Math.floor(props.index / 10) * 20}px ${
          (props.index % 10) * 20
        }px`,
      }}
      onClick={async () => {
        props.setArr(Reveal(props.arr,props.index));
        if(props.result === ''){
          if(props.arr.filter(i=>i.revealed).length >=85){
            props.setResult('WON');
            Win()
            await new Promise(r => setTimeout(r, 1000));
            props.setArr(RevealAll(props.arr));
          }
          if (content === '💣'){
            props.setResult('LOST');
            Lose()
            await new Promise(r => setTimeout(r, 1000));
            props.setArr(RevealAll(props.arr));
          }
        }
      }}
      className={
        props.arr[props.index].revealed ? 'btn revealed' : marked ? 'btn hidden marked' : 'btn hidden'
      }
    >
      {props.arr[props.index].revealed ? content : ''}
    </div>
  );
}


