type GetUpdateCurrentStateType = {
  currentState: {
    currentCategory: string,
    currentSorting: string,
    sortingActivePopup: boolean,
  }
}

type ReturnUpdateCurrentStateType = {
  currentCategory: string,
  currentSorting: string,
  sortingActivePopup: boolean,
}

type Test = {
  type: string
  payload: any
}

const updateCurrentStateList = (state: GetUpdateCurrentStateType, { type, payload }: Test): ReturnUpdateCurrentStateType => {
   if (state === undefined) {
     return {
       currentCategory: 'all',
       currentSorting: 'популярности',
       sortingActivePopup: false,
     }
   }

  switch (type) {
    case "TOGGLE_CURRENT_CATEGORY":
      return {
        ...state.currentState,
        currentCategory: payload,
      }
    case "CURRENT_SORTING":
      return {
        ...state.currentState,
        currentSorting: payload
      }
    case "SORTING_ACTIVE_POPUP":
      return {
        ...state.currentState,
        sortingActivePopup: payload
      }

    default:
      return state.currentState;
  }
}

export default updateCurrentStateList