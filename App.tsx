import * as React from 'react';
import Container from './components/Container';
import Array from './components/Array';
import './style.css';
import Result from './components/Result';

const bombs = 15;
let arr = Array(bombs)


export default function App() {
  const [result,setResult] = React.useState('')
  return (
    <div>
      <Result result={result} />
      <h1>Minesweeper</h1>
      <div className="container">
        <Container arr={Array(bombs)} setResult={setResult} result={result} />
      </div>
    </div>
  );
}
