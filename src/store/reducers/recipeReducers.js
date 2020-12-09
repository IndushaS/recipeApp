import { SAVE_RECIPE } from "../actions/recipeActions";
import { UNSAVE_RECIPE } from "../actions/recipeActions";
import { ADD_RECIPE } from "../actions/recipeActions";

const initState = {
  savedRecipe: [],
  addedRecipe: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case SAVE_RECIPE:
      return {
        ...state,
        savedRecipe: [...state.savedRecipe, action.payload],
      };

    case ADD_RECIPE:
      return {
        ...state,
        addedRecipe: [...state.addedRecipe, action.payload],
      };
    default:
      return state;
  }
};
