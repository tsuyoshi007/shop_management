import products from "./products";
import categories from "./categories";
import cart from "./cart";
import transaction from "./transaction";
import { combineReducers } from "redux";

export default combineReducers({
  products,
  categories,
  cart,
  transaction
});
