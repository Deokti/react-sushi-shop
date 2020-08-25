import React from "react";

import './header.scss';
import Logo from "../logo";
import CartButton from "../cart-button";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to='/' className="header-link">
          <Logo />
        </Link>
        <Link to='/cart-page' className="header-link">
          <CartButton price={143} amount={15} />
        </Link>
      </div>
    </header>
  );
}

export default Header;