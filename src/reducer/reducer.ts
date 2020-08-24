import {TypeInitialState} from "../types";

const initialState = {
  sushiList: [],
  categories: [
    { id: 1, name: 'all', label: 'Все' },
    { id: 2, name: 'rolls', label: 'Роллы' },
    { id: 3, name: 'sets', label: 'Сеты' },
    { id: 4, name: 'sushi', label: 'Суши' },
    { id: 5, name: 'spice', label: 'Специи' },
  ],
  currentCategory: 'all',
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

    default:
      return state;
  }
}

export default reduces;
