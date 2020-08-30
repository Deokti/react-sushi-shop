import { updateOrderCart } from "../utils";
import { CartOneSushi } from "../types";

type TypeUpdateShoppingCart = {
  shoppingCart: {
    cartList: Array<CartOneSushi>,
    fullOrderPrice: number,
  };
}

const updateShoppingCart = (state: TypeUpdateShoppingCart, actions: any) => {
  if (state === undefined) {
    return {
      cartList: [],
      fullOrderPrice: 0,
    }
  }

  switch (actions.type) {
    case "SUSHI_ADDED_TO_CART":
      return updateOrderCart(state, actions.payload, 1);
    case "SUSHI_REMOVE_FROM_CART":
      return updateOrderCart(state, actions.payload, -1);
    case "ALL_SUSHI_REMOVE_FROM_CART":
      const { buyAmount }: any = state.shoppingCart.cartList.find(({ id }: any) => id === actions.payload);
      return updateOrderCart(state, actions.payload, -buyAmount);

    default:
      return state.shoppingCart
  }
}

export default updateShoppingCart;