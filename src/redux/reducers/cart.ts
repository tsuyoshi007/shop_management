import { ADD_PRODUCT_TO_CART, CLEAR_CART, cartAction } from "../actions/cart";
import { Iproduct } from "../actions/product";

export interface IproductInCart {
  product: Iproduct;
  quantity: number;
  price: number;
}

export default function cart(state: IproductInCart[] = [], action: cartAction) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const itemIndex = state.findIndex(productInCart => {
        return action.product.product_id === productInCart.product.product_id;
      });

      if (itemIndex === -1) {
        return [
          ...state,
          {
            product: action.product,
            quantity: 1,
            price: action.product.product_retail_price
          }
        ];
      }
      const newState = [
        ...state.slice(0, itemIndex),
        {
          product: action.product,
          quantity: state[itemIndex].quantity + 1,
          price: (
            (state[itemIndex].quantity + 1) *
            action.product.product_retail_price
          ).toFixed(4)
        },
        ...state.slice(itemIndex + 1)
      ];
      return newState;
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
}
