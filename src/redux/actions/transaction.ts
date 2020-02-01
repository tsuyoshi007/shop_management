import { product } from "./products";

export const INITIAL_TRANSACTION = "INITIAL_TRANSACTION";
export const CREATE_TRANSACTION = "CREATE_TRANSACTION";

interface cart {
  product: product[];
}

interface staff {
  staff_id: number;
  staff_name: string;
  staff_details: string;
}

export interface transaction {
  cart: cart;
  transaction_price: number;
  staff: staff;
}

export interface transactionAction {
  type: string;
  transaction: transaction;
}

export function initialTransaction(transaction: transaction) {
  return { type: INITIAL_TRANSACTION, transaction: transaction };
}

export function createTransaction(transaction: transaction) {
  return { type: CREATE_TRANSACTION, transaction: transaction };
}
