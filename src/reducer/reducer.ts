import { CartOneSushi, TypeInitialState, TypeOneSushiServer } from "../types";
import { updateCartItem, updateCartList } from "../utils";

const initialState = {
  sushiList: [],
  categories: [
    { id: 1, name: 'all', label: 'Все' },
    { id: 2, name: 'rolls', label: 'Роллы' },
    { id: 3, name: 'sets', label: 'Сеты' },
    { id: 4, name: 'sushi', label: 'Суши' },
    { id: 5, name: 'spice', label: 'Специи' },
  ],
  sortingList: [
    { id: 1, name: 'popularity', label: 'популярности' },
    { id: 2, name: 'prices', label: 'цене' },
    { id: 3, name: 'alphabet', label: 'алфавиту' }
  ],
  currentCategory: 'all',
  currentSorting: 'популярности',
  sortingActivePopup: false,
  cartList: [],
  fullOrderPrice: 280,
}

const updateOrderCart = (state: any, sushiId: number, quantity: number) => {
  const { sushiList, cartList  } = state;

  const sushi: any = sushiList.find((item: TypeOneSushiServer) => item.id === sushiId);
  const indexSushiItem: number = cartList.findIndex(({ id }: CartOneSushi) => id === sushiId);
  const addSushiItem: CartOneSushi = cartList[indexSushiItem];

  const sushiItem = updateCartItem(sushi, addSushiItem, quantity);
  return {
    ...state,
    cartList: updateCartList(cartList, sushiItem, indexSushiItem)
  }
}


// Обычная функция в которой и происходят действия
const reduces = (state: TypeInitialState = initialState, actions: any) => {
  switch (actions.type) {
    case "SUSHI_LIST_LOADED":
      return {
        ...state,
        sushiList: actions.payload,
      }

    case "CATEGORY_READY":
      return {
        ...state,
        category: actions.payload,
      }

    case "TOGGLE_CURRENT_CATEGORY":
      return {
        ...state,
        currentCategory: actions.payload,
      }

    case "CURRENT_SORTING":
      return {
        ...state,
        currentSorting: actions.payload
      }

    case "SORTING_ACTIVE_POPUP":
      return {
        ...state,
        sortingActivePopup: actions.payload
      }

    case "SUSHI_ADDED_TO_CART":
      return updateOrderCart(state, actions.payload, 1);

    case "SUSHI_REMOVE_FROM_CART":
      return updateOrderCart(state, actions.payload, -1);

    case "ALL_SUSHI_REMOVE_FROM_CART":
      const { buyAmount }: any = state.cartList.find(({ id }) => id === actions.payload);
      return updateOrderCart(state, actions.payload, -buyAmount);

    default:
      return state;
  }
}

export default reduces;
