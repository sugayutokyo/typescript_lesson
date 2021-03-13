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

// Intersection Types
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

// Union Types
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, 'hello'];

// Literal Types
let company: 'Facebook' | 'Google' | 'Amazon';
company = 'Amazon';

let memory: 256 | 512;
memory = 256;

function App() {
  return (
    <div className="App"></div>
  );
}

export default App;
