import * as React from 'react';
import Lose from './Lose';
import Reveal from './Reveal';
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
      onClick={() => {
        props.setArr(Reveal(props.arr,props.index));
        if(props.result === ''){
          if (content === '💣'){props.setResult('LOST');Lose()}
          if(props.arr.filter(i=>i.revealed).length >=85){props.setResult('WIN');Win()}
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

