import React from 'react';
import logo from './logo.svg';
import './App.css';
import BowlingList from './Bowling/BowlingList';

function Header() {
  return (
    <div>
      <h1>Barbara & David Fournier Bowling Crew!!!</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <BowlingList />
    </div>
  );
}

export default App;
