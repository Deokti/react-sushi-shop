import React from "react";

import './cart-list-item.scss';

import icon from '../../assets/image/123.png';

const CartListItem: React.FC = () => {

  return (
    <div className="cart-list-item">
      <div className="cart-list-item__information">
        <img src={icon} alt="logo" className="cart-list-item__image" />
        <h5 className='cart-list-item__title'>Аляска</h5>
      </div>

      <div className="cart-list-item__counter">
        <button className='cart-list-item__button cart-list-item__button--minus' />
        <span className="cart-list-item__amount">2</span>
        <button className='cart-list-item__button cart-list-item__button--plus' />
      </div>

      <span className="cart-list-item__price">58 ₽</span>
      <button className="cart-list-item__button cart-list-item__button--delete" />
    </div>
  );
};

export default CartListItem;