import React from "react";
import Header from "../header";
import ShopPage from "../pages/shop-page";
import CartPage from "../pages/cart-page";

import { Route } from 'react-router-dom';

import './app.scss';

const App: React.FC = () => {
  return (
    <main className="app">
      <div className="container">
        <div className="app__wrapper">
          <Header />

          <div className="app-content">
            <Route exact path='/' component={ ShopPage } />
            <Route path="/cart-page" component={ CartPage } />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;