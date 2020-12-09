export const SAVE_RECIPE = "SAVE_RECIPE";
export const UNSAVE_RECIPE = "UNSAVE_RECIPE";
export const ADD_RECIPE = "ADD_RECIPE";

export const saveRecipe = (data) => {
  return {
    type: SAVE_RECIPE,
    payload: data,
  };
};

export const addNewRecipe = (data) => {
  return {
    type: ADD_RECIPE,
    payload: data,
  };
};
