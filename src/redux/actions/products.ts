export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export interface product {
  product_id: number;
  product_name: string;
  product_details: string;
  product_wholesale_price: number;
  product_retail_price: number;
  product_quantity: number;
  category_id: number;
}

export interface productAction {
  type: string;
  product: product;
}

export function addProduct(product: product) {
  return { type: ADD_PRODUCT, product: product };
}
export function editProduct(product: product) {
  return { type: EDIT_PRODUCT, product: product };
}
export function deleteProduct(product: product) {
  return { type: DELETE_PRODUCT, product: product };
}
