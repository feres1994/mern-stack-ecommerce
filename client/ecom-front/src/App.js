import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
//screens
import Home from './Screens/homeScreen';
import ProductDetail from './Screens/productScreen';
import './App.css';

function App() {
  return (
    <div className="grid-container">
      <Header />
      <main className="main">
        <div className="content">
          <Route path="/" exact={true} component={Home} />
          <Route path="/products/:id" component={ProductDetail} />
        </div>
      </main>
      <footer className="footer">all rights are reserved</footer>
    </div>
  );
}

export default App;
