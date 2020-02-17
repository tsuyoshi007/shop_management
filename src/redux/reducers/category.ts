import {
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  categoryAction,
  Icategory
} from "../actions/category";

export default function category(
  state: Icategory[] = [],
  action: categoryAction
) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.category];
    case EDIT_CATEGORY: {
      const itemIndex = state.findIndex(
        category => action.category.id === category.id
      );
      const newState = [
        ...state.slice(0, itemIndex),
        action.category,
        ...state.slice(itemIndex + 1)
      ];
      return newState;
    }

    case DELETE_CATEGORY: {
      const updatedProducts = state.filter(category => {
        return category.id !== action.category.id;
      });

      return updatedProducts;
    }
    default:
      return state;
  }
}
