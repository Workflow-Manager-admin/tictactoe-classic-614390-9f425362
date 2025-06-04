import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <span className="logo-symbol">♟</span> TicTacToe Classic
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <TicTacToe />
        </div>
      </main>
    </div>
  );
}

export default App;