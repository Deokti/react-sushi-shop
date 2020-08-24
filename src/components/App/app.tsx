import React from "react";

import Header from "../header";

import './app.scss';
import Category from "../category/category";
import SushiList from "../sushi-list/sushi-list";

const App: React.FC = () => {
  return (
    <main className="app">
      <div className="container">
        <div className="app__wrapper">
          <Header />

          <div className="app-content-top">
            <Category />
          </div>

          <div className="app-content-bottom">
            <SushiList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;