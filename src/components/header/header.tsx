import React from "react";

import './header.scss';
import Logo from "../logo";
import CartButton from "../cart-button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

type HeaderPropsType = {
  fullOrderPrice: number,
  fullOrderAmount: number
}

const Header: React.FC<HeaderPropsType> = ({fullOrderPrice, fullOrderAmount}: HeaderPropsType) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to='/' className="header-link">
          <Logo />
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