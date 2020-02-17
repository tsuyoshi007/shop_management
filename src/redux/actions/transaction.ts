import { Iproduct } from "./product";

export const INITIAL_TRANSACTION = "INITIAL_TRANSACTION";
export const CREATE_TRANSACTION = "CREATE_TRANSACTION";

interface cart {
  product: Iproduct[];
}

interface staff {
  staff_id: number;
  staff_name: string;
  staff_details: string;
}

export interface Itransaction {
  cart: cart;
  transaction_price: number;
  staff: staff;
}

export interface transactionAction {
  type: string;
  transaction: Itransaction;
}

export function initialTransaction(transaction: Itransaction) {
  return { type: INITIAL_TRANSACTION, transaction: transaction };
}

export function createTransaction(transaction: Itransaction) {
  return { type: CREATE_TRANSACTION, transaction: transaction };
}
