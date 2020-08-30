import { CartOneSushi, TypeOneSushiServer } from "../types";

export const updateCartItem = (sushi: TypeOneSushiServer, addSushiItem: CartOneSushi, quantity: number) => {
  if (addSushiItem) {
    return {
      ...addSushiItem,
      buyAmount: addSushiItem.buyAmount + quantity,
      totalPrice: addSushiItem.totalPrice + (quantity * sushi.price),
    }
  } else {
    return {
      id: sushi.id,
      buyAmount: 1,
      currency: sushi.currency,
      imageUrl: sushi.imageUrl,
      name: sushi.name,
      totalPrice: sushi.price
    }
  }
}