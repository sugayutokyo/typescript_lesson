import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = 'hello';

let nameChange = 'hello';
nameChange = 'hello2';

let username = 'Hello';
let dummyNum: number = 2;
let bool: boolean = true;

let array1 = [true, false, true];
let array2 = [0, 1, 'hello'];

interface NAME {
  first: string;
  last: string | null;
}

let nameObj: NAME = { first: 'Yamada', last: null };
const func1 = (x: number, y: number): number => {
  return x + y;
};

type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: 'Tokyo',
  username: 'xxx',
  password: 'yyy'
}

function App() {
  return (
    <div className="App"></div>
  );
}

export default App;
