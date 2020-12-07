export const SAVE_RECIPE = "SAVE_RECIPE";
export const UNSAVE_RECIPE = "UNSAVE_RECIPE";
export const ADD_RECIPE = "ADD_RECIPE";

export const saveRecipe = (data) => {
  console.log("this saved" + data);
  return {
    type: SAVE_RECIPE,
    payload: data,
  };
};

// export const unsaveRecipe = (data) => {
//   dispatch({
//     type: UNSAVE_RECIPE,
//     savedRecipe: data,
//   });
// };

export const addNewRecipe = (data) => {
  console.log("this saved" + data);
  return {
    type: ADD_RECIPE,
    payload: data,
  };
};
