import React from 'react';
import NavBar from './componentes/NavBar';
import Home from './componentes/Home';
import Cart from './componentes/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Cart />
    </div>
  );
}

export default App;
