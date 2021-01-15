import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: [],
  page: 1,
  apiType: "",
  search: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE_LIST:
      return {
        ...state,
        data: action.data,
        page: action.page,
        apiType: action.apiType,
      };
    case actionTypes.FETCH_SEARCH_MOVIES:
      return {
        ...state,
        data: action.data,
        page: action.page,
        apiType: action.apiType,
        search: action.search,
      };
    case actionTypes.FETCH_POPULAR_MOVIES:
      return {
        ...state,
        data: action.data,
        page: action.page,
        apiType: action.apiType,
      };
    default:
      return state;
  }
};

export default reducer;
