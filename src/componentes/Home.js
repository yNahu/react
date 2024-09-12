import React from 'react';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div>
      <header className="hero">
        <h2>Bienvenidos a NAIK</h2>
        <p>Explora nuestras últimas colecciones</p>
      </header>
      <ProductList />
    </div>
  );
};

export default Home;
