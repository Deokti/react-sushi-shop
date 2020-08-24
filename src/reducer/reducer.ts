
const initialState = {
  sushiList: [],
  category: [
    { id: 1, name: 'all', label: 'Все' },
    { id: 2, name: 'rolls', label: 'Роллы' },
    { id: 3, name: 'sushi', label: 'Суши' },
    { id: 4, name: 'sets', label: 'Сеты' },
    { id: 5, name: 'spice', label: 'Специи' },
  ],
}
// Обычная функция в которой и происходят действия
const reduces = (state: any = initialState, actions: any) => {
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
    default:
      return state;
  }
}

export default reduces;