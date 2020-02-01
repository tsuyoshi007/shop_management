import {
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  categoryAction,
  category
} from "../actions/categories";

export default function categories(
  state: category[] = [],
  action: categoryAction
) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.category];
    case EDIT_CATEGORY: {
      const itemIndex = state.findIndex(
        category => action.category.category_id === category.category_id
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
        return category.category_id !== action.category.category_id;
      });

      return updatedProducts;
    }
    default:
      return state;
  }
}
