import React, { useState } from "react";

import Header from "../header";

import './app.scss';
import Category from "../category/category";
import SushiList from "../sushi-list/sushi-list";

const App: React.FC = () => {
  const [ currentCategory, setCurrentCategory ] = useState('all');

  const toggleCurrentCategory = (category: string) => {
    setCurrentCategory(category);
  }

  return (
    <main className="app">
      <div className="container">
        <div className="app__wrapper">
          <Header />

          <div className="app-content-top">
            <Category currentCategory={currentCategory}
                      toggleCurrentCategory={toggleCurrentCategory}/>
          </div>

          <div className="app-content-bottom">
            <SushiList currentCategory={currentCategory} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;