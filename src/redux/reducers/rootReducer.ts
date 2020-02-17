import product from "./product";
import category from "./category";
import cart from "./cart";
import transaction from "./transaction";
import { combineReducers } from "redux";
import { Iproduct } from "../actions/product";
import { Icategory } from "../actions/category";
import { IproductInCart } from "../reducers/cart";
import { Itransaction } from "../actions/transaction";

export interface state {
  product: Iproduct[];
  category: Icategory[];
  cart: IproductInCart[];
  transaction: Itransaction[];
}

export default combineReducers({
  product,
  category,
  cart,
  transaction
});
