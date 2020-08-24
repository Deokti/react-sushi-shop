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