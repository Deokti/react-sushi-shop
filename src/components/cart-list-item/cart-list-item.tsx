import React from "react";

import './cart-list-item.scss';
import { TypeCartListItem } from "../../types";

// buyAmount - колличество купленных паков суши
// currency - валюта в которой была покупка
// name - название суши/роллов
// imageUrl - ссылка на картинку
// price = стоимость

const CartListItem: ({ buyAmount, currency, imageUrl, name, totalPrice, onIncrement, onDecrement, onDelete }: TypeCartListItem) =>
  JSX.Element = ({ buyAmount, currency, imageUrl, name, totalPrice, onIncrement, onDecrement, onDelete }: TypeCartListItem) => {

  return (
    <div className="cart-list-item">
      <div className="cart-list-item__information">
        <img src={imageUrl} alt="logo" className="cart-list-item__image" />
        <h5 className='cart-list-item__title'>{name}</h5>
      </div>

      <div className="cart-list-item__counter">
        <button
          onClick={onDecrement}
          className='cart-list-item__button cart-list-item__button--minus' />
        <span className="cart-list-item__amount">{buyAmount}</span>
        <button
          onClick={onIncrement}
          className='cart-list-item__button cart-list-item__button--plus' />
      </div>

      <span className="cart-list-item__price">{totalPrice} {currency}</span>
      <button
        onClick={onDelete}
        className="cart-list-item__button cart-list-item__button--delete" />
    </div>
  );
};




export default CartListItem;