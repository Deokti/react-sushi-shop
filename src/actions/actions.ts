import { TypeOneSushiServer } from "../types";

export const toggleCurrentCategory = (newCategory: string) => {
  return {
    type: 'TOGGLE_CURRENT_CATEGORY',
    payload: newCategory,
  }
}

export const sushiListLoaded = (newSushiList: Array<TypeOneSushiServer>) => {
  return {
    type: 'SUSHI_LIST_LOADED',
    payload: newSushiList,
  }
}

export const toggleSortingActivePopup = (newStatePopup: boolean) => {
  return {
    type: 'SORTING_ACTIVE_POPUP',
    payload: newStatePopup,
  }
}

export const toggleCurrentSorting = (newSorting: string) => {
  return {
    type: 'CURRENT_SORTING',
    payload: newSorting,
  }
}
