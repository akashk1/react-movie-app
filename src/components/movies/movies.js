import React, { useEffect, useState } from "react";
import Movie from "../movie/movie";
import classes from "./movies.module.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/movieActions";
const Movies = (props) => {
  const apiType = useSelector((state) => state.apiType);
  const search = useSelector((state) => state.search);
  const movies = useSelector((state) => state.data);
  const page = useSelector((state) => state.page);
  const [pageNum, setPageNum] = useState(page);
  const dispatch = useDispatch();
  useEffect(() => {
    if (apiType === "search")
      dispatch(actions.searchMovie(search, pageNum, apiType));
    else if (apiType === "init")
      dispatch(actions.initMovieData(pageNum, apiType));
    else if (apiType === "popular")
      dispatch(actions.popularMovies(pageNum, apiType));
    else {
      props.history.push("/");
      dispatch(actions.initMovieData(pageNum, "init"));
    }
  }, [pageNum]);
  const next = () => {
    setPageNum(pageNum + 1);
  };
  const previous = () => {
    setPageNum(pageNum - 1);
  };
  let moviesData = (
    <div className={classes.container}>
      {movies.map((data, index) => {
        return <Movie data={data} index={index} key={data.id} />;
      })}
    </div>
  );

  if (movies.length === 0) {
    moviesData = (
      <div className={classes.warning}>
        <h1>Go Back....</h1>
        <h3>No More movies</h3>
      </div>
    );
  }
  return (
    <React.Fragment>
      {moviesData}
      <div className={classes.pagination}>
        <button
          className={classes.previous}
          onClick={previous}
          disabled={pageNum < 2}
        >
          Previous Page
        </button>
        <button
          className={classes.next}
          onClick={next}
          disabled={pageNum > 500}
        >
          Next Page
        </button>
      </div>
    </React.Fragment>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     movies: state.data,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchMoviesList: () => {
//       dispatch(actions.initMovieData());
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Movies);
export default Movies;
