import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CATEGORIES_ACTION_TYPE } from "./categories.types";

export const setCategories = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
  payload: categoriesArray,
});

export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
});

export const fetchCategoriesFailed = (error) => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
  payload: error,
});

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
