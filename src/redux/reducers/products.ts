import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  productAction
} from "../actions/products";
import { product } from "../actions/products";

export default function products(state: product[] = [], action: productAction) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product];

    case EDIT_PRODUCT: {
      const itemIndex = state.findIndex(
        product => action.product.product_id === product.product_id
      );
      const newState = [
        ...state.slice(0, itemIndex),
        action.product,
        ...state.slice(itemIndex + 1)
      ];
      return newState;
    }

    case DELETE_PRODUCT: {
      const updatedProducts = state.filter(product => {
        return product.product_id !== action.product.product_id;
      });

      return updatedProducts;
    }

    default:
      return state;
  }
}
