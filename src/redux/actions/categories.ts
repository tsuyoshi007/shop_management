export const ADD_CATEGORY = "ADD_CATEGORY";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export interface category {
  category_id: number;
  category_name: string;
  category_details: string;
}

export interface categoryAction {
  type: string;
  category: category;
}

export function addCategory(category: category) {
  return { type: ADD_CATEGORY, category: category };
}
export function editCategory(category: category) {
  return { type: EDIT_CATEGORY, category: category };
}
export function deleteCategory(category: category) {
  return { type: DELETE_CATEGORY, category: category };
}
