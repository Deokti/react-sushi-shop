import { CartOneSushi, TypeOneSushiServer } from "../types";
import { updateCartItem } from "./update-cart-item";
import { updateCartList } from "./update-cart-list";

export const updateOrderCart = (state: any, sushiId: number, quantity: number) => {
  const { arrays: { sushiList }, shoppingCart: { cartList }  } = state;

  const sushi: any = sushiList.find((item: TypeOneSushiServer) => item.id === sushiId);
  const indexSushiItem: number = cartList.findIndex(({ id }: CartOneSushi) => id === sushiId);
  const addSushiItem: CartOneSushi = cartList[indexSushiItem];

  const sushiItem = updateCartItem(sushi, addSushiItem, quantity);
  return {
    fullOrderPrice: 0,
    cartList: updateCartList(cartList, sushiItem, indexSushiItem)
  }
}
