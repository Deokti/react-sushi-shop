import updateDataInArrays from "./update-data-in-arrays";
import updateCurrentState from './update-currentstate';
import updateShoppingCart  from "./update-shopping-cart";

const reduces = (state: any, actions: any) => {
  return {
    arrays: updateDataInArrays(state, actions),
    currentState: updateCurrentState(state, actions),
    shoppingCart: updateShoppingCart(state, actions),
  }
}

export default reduces;
