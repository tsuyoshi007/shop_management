export const ADD_CATEGORY = "ADD_CATEGORY";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export interface Icategory {
  id: number;
  name: string;
  detail: string;
}

export interface categoryAction {
  type: string;
  category: Icategory;
}

export function addCategory(category: Icategory) {
  return { type: ADD_CATEGORY, category: category };
}
export function editCategory(category: Icategory) {
  return { type: EDIT_CATEGORY, category: category };
}
export function deleteCategory(category: Icategory) {
  return { type: DELETE_CATEGORY, category: category };
}
