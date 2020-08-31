import React from "react";
import Category from "../category/category";
import Sorting from "../sorting";
import SushiList from "../sushi-list/sushi-list";

const ShopPage: React.FC  = () => {
  return (
    <React.Fragment>
      <div className="app-content-top">
        <Category/>
        <Sorting/>
      </div>

      <div className="app-content-bottom">
        <SushiList/>
      </div>
    </React.Fragment>
  )
};

export default ShopPage;