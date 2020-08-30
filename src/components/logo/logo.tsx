import React from "react";
import logo from "../../assets/image/logo.png";

import './logo.scss';

const Logo = () => {
  return (
    <div className="logo" title="Перейти на главную страницу">
      <img src={logo} alt="Роллы"/>

      <div className="logo__description">
        <h1 className="logo__title">React Sushi</h1>
        <span className="logo__subtitle">Лучшие суши и роллы </span>
      </div>
    </div>
  );
}

export default Logo;