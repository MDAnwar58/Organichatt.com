import {
  GET_DATAS,
  GET_CATEGORIES,
  GET_EDIT_DATA,
  GET_UPDATE_ERRORS,
} from "./actionType";

const initialState = {
  products: [],
  sub_category: {},
  categories: {},
  errors: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATAS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_EDIT_DATA:
      return {
        ...state,
        sub_category: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_UPDATE_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
