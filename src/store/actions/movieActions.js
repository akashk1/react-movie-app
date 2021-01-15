import * as actionTypes from "./actionTypes";
import axios from "axios";
import {
  MOVIE_LIST_API,
  SEARCH_MOVIE_API,
  POPULAR_MOVIES_API,
} from "../../API";

const fetchMovieData = (data, page, apiType) => {
  return {
    type: actionTypes.FETCH_MOVIE_LIST,
    data: data,
    page: page,
    apiType: apiType,
  };
};

const fetchSearchMovieData = (data, page, apiType, text) => {
  return {
    type: actionTypes.FETCH_SEARCH_MOVIES,
    data: data,
    page: page,
    apiType: apiType,
    search: text,
  };
};

const fetchPopularMovies = (data, apiType, page) => {
  return {
    type: actionTypes.FETCH_POPULAR_MOVIES,
    data: data,
    page: page,
    apiType: apiType,
  };
};

export const initMovieData = (page, apiType) => {
  return (dispatch) => {
    axios.get(MOVIE_LIST_API + page).then((jsonData) => {
      dispatch(fetchMovieData(jsonData.data.results, page, apiType));
    });
  };
};

export const searchMovie = (search, page, apiType) => {
  return (dispatch) => {
    axios
      .get(SEARCH_MOVIE_API(search, page))
      .then((jsonData) => {
        dispatch(
          fetchSearchMovieData(jsonData.data.results, page, apiType, search)
        );
      })
      .catch((err) => {});
  };
};

export const popularMovies = (page, apiType) => {
  return (dispatch) => {
    axios.get(POPULAR_MOVIES_API(page)).then((jsonData) => {
      dispatch(fetchPopularMovies(jsonData.data.results, apiType, page));
    });
  };
};
