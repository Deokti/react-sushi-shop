import React from "react";

import './header.scss';
import CartButton from "../cart-button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../assets/image/logo.png";

type HeaderPropsType = {
  fullOrderPrice: number,
  fullOrderAmount: number
}

const Header: React.FC<HeaderPropsType> = ({fullOrderPrice, fullOrderAmount}: HeaderPropsType) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to='/' className="logo" title="Перейти на главную страницу">
          <img src={logo} alt="Роллы"/>

          <div className="logo__description">
            <h1 className="logo__title">React Sushi</h1>
            <span className="logo__subtitle">Лучшие суши и роллы </span>
          </div>
        </Link>
        <Link to='/cart-page' className="header-link">
          <CartButton price={fullOrderPrice} amount={fullOrderAmount} />
        </Link>
      </div>
    </header>
  );
}

type MapStateToPropsState = {
  shoppingCart: {
    fullOrderPrice: number
    fullOrderAmount: number
  }
}

const mapStateToProps = ({shoppingCart: {fullOrderPrice, fullOrderAmount}}: MapStateToPropsState) => {
  return {fullOrderPrice, fullOrderAmount}
}

export default connect(mapStateToProps)(Header);