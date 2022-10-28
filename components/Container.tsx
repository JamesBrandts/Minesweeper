import * as React from 'react';
import Button from './Button';

export default function Container(props){
  const [arr,setArr] = React.useState(props.arr)
  return(
    arr.map((button,index) => <Button key={`btn-${index}`} content={button.content} index={index} revealed={button.revealed} setArr={setArr} arr={arr} setResult={props.setResult} result={props.result} />)
  )
}

