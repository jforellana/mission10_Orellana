import React from 'react';
import logo from './logo.svg';
import './App.css';
import BowlingList from './Bowling/BowlingList';
import Header from './Bowling/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BowlingList />
    </div>
  );
}

export default App;
