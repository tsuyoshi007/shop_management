import {
  INITIAL_TRANSACTION,
  CREATE_TRANSACTION,
  transactionAction
} from "../actions/transaction";

export default function transaction(state = [], action: transactionAction) {
  switch (action.type) {
    case INITIAL_TRANSACTION:
      return action.transaction;
    case CREATE_TRANSACTION:
      return [...state, action.transaction];
    default:
      return state;
  }
}
