import React from 'react';
import './App.css';
import Header from './Components/Header'
import Library from './Components/Library'
import Book from './Components/Book'


function App() {
  return (
    <div className="App">
      <Header />
      <Library />
      <Book />
    </div>
  );
}

export default App;
