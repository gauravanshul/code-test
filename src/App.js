import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardComponent from './codeCards';

function App() {
  return (
    <div className="App">
      <div className="app-wrap">Code exercise</div>
      <CardComponent />
    </div>
  );
}

export default App;
