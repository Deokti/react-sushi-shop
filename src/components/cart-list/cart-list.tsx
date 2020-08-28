import React from "react";
import { Link } from "react-router-dom";
import CartListItem from "../cart-list-item";

import './cart-list.scss';

const CartList = () => {
  return (
    <div className="cart-list">
      <h3 className="cart-list__title">Корзина</h3>

      <ul className="cart-list-content cart-list-items">
        <li> <CartListItem /> </li>
        <li> <CartListItem /> </li>
        <li> <CartListItem /> </li>
      </ul>

      <div className="cart-list-bottom">
        <Link to="/">
          <button className="cart-list__button cart-list__back">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L1 6.93015L6.86175 1" stroke="#919191" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Вернуться назад</span>
          </button>
        </Link>

        <div className="cart-list__order">
          <h6 className="cart-list__price">
            <span className="cart-list__price--title">Сумма заказа: </span>
            <span className="cart-list__price--subtitle">232 ₽</span>
          </h6>

          <button className="cart-list__button cart-list__buy">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default CartList;