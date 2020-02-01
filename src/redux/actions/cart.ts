import { product } from "./products";

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const CLEAR_CART = "CLEAR_CART";

export interface cartAction {
  type: string;
  product: product;
}

export function addProductToCart(product: product) {
  return { type: ADD_PRODUCT_TO_CART, product: product };
}

export function clearCart() {
  return { type: CLEAR_CART };
}
