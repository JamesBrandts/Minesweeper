import * as React from 'react';
import Container from './components/Container';
import Array from './components/Array';
import './style.css';

const bombs = 15;
let arr = Array(bombs)


export default function App() {
  return (
    <div>
      <p id="win-lose"className="win-lose"></p>
      <h1>Minesweeper</h1>
      <div className="container">
        <Container arr={Array(bombs)} />
      </div>
    </div>
  );
}
