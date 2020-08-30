import { TypeInitialState } from "../types";
import { updateOrderCart } from "../utils";
import { act } from "react-dom/test-utils";

const initialState = {
  arrays: {
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
  },
  currentState: {
    currentCategory: 'all',
    currentSorting: 'популярности',
    sortingActivePopup: false,
  },
  shoppingCart: {
    cartList: [],
    fullOrderPrice: 0,
  }
}

const dataInArrays = (state: any, actions: any) => {
  switch (actions.type) {
    case "SUSHI_LIST_LOADED":
      return {
        ...state.arrays,
        sushiList: actions.payload,
      }
    case "CATEGORY_READY":
      return {
        ...state.arrays,
        category: actions.payload,
      }
  }
};

const currentState = (state: any, actions: any) => {
  switch (actions.type) {
    case "TOGGLE_CURRENT_CATEGORY":
      return {
        ...state.currentState,
        currentCategory: actions.payload,
      }
    case "CURRENT_SORTING":
      return {
        ...state.currentState,
        currentSorting: actions.payload
      }
    case "SORTING_ACTIVE_POPUP":
      return {
        ...state.currentState,
        sortingActivePopup: actions.payload
      }
  }
}

const updateShoppingCart = (state: any, actions: any) => {
  switch (actions.type) {
    case "SUSHI_ADDED_TO_CART":
     return updateOrderCart(state, actions.payload, 1);
    case "SUSHI_REMOVE_FROM_CART":
      return updateOrderCart(state, actions.payload, -1);
    case "ALL_SUSHI_REMOVE_FROM_CART":
      const { buyAmount }: any = state.shoppingCart.cartList.find(({ id }: any) => id === actions.payload);
      return updateOrderCart(state, actions.payload, -buyAmount);
  }
}


// Обычная функция в которой и происходят действия
const reduces = (state: any = initialState, actions: any) => {
  switch (actions.type) {
    case "SUSHI_LIST_LOADED":
    case "CATEGORY_READY":
      return {
        ...state,
        arrays: dataInArrays(state, actions),
      }
    case "TOGGLE_CURRENT_CATEGORY":
    case "CURRENT_SORTING":
    case "SORTING_ACTIVE_POPUP":
      return {
        ...state,
        currentState: currentState(state, actions),
      }


    case "SUSHI_ADDED_TO_CART":
    case "SUSHI_REMOVE_FROM_CART":
    case "ALL_SUSHI_REMOVE_FROM_CART":
      return {
        ...state,
        shoppingCart: updateShoppingCart(state, actions),
      }

    default:
      return state;
  }
}

export default reduces;
