export const MOVIE_LIST_API = `https://api.themoviedb.org/3/discover/movie?api_key=9cf855853971932c1d981663a3db9d1d&language=en-US&
  sort_by=popularity.desc&include_adult=false&include_video=false&page=`;

export const IMG_API = "https://image.tmdb.org/t/p/w1280";
export const SEARCH_MOVIE_API = (search, page) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=9cf855853971932c1d981663a3db9d1d&language=en-US&query=${search}&page=${page}`;
};

export const POPULAR_MOVIES_API = (page) => {
  return `https://api.themoviedb.org/3/movie/upcoming?api_key=9cf855853971932c1d981663a3db9d1d&language=en-US&page=${page}`;
};
