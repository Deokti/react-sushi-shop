type TypeUpdateCurrentState = {
  currentState: {
    currentCategory: string,
    currentSorting: string,
    sortingActivePopup: boolean,
  };
}

const updateCurrentState = (state: TypeUpdateCurrentState, actions: any) => {
   if (state === undefined) {
     return {
       currentCategory: 'all',
       currentSorting: 'популярности',
       sortingActivePopup: false,
     }
   }

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

    default:
      return state.currentState;
  }
}

export default updateCurrentState