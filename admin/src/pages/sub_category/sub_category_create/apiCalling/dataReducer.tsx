import { GET_CATEGORY_DATAS, GET_ERRORS } from "./actionType";

const initialState = {
  categories: [],
  errors: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_DATAS:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
export default dataReducer;
