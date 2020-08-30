import React from 'react';

import './sushi-list-item.scss';
import {TypeOneSushiServer} from "../../types";

const SushiListItem: React.FC<TypeOneSushiServer> = (
  { amount, composition, currency,
    imageUrl, name, price, onAddedToCart,
  }) => {

  const checkComposition = composition ? (composition.join(', ')).trim() : composition;

  return (
    <li className="sushi-list-item">
      <span className="sushi-list-item__image">
        <img src={imageUrl} alt={name} />
      </span>

      <div className="sushi-list-item__header">
        <h3 className="sushi-list-item__title">{name}</h3>
        {checkComposition &&
        <span className="sushi-list-item__description">{checkComposition}</span>}
      </div>

      <h4 className="sushi-list-item__price">
        <span className="sushi-list-item__cost">{price}{currency}</span>
        <span className="sushi-list-item__amount">за {amount} шт</span>
      </h4>

      <button
        onClick={onAddedToCart}
        className="sushi-list-item__button">
          <span>Добавить</span>
      </button>
    </li>
  )
};

export default SushiListItem;