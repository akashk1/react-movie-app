import React, { useState } from "react";
import * as actions from "../../store/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setSearchText(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(actions.searchMovie(searchText, 1, "search"));
    history.push("/");
    // props.getSearchedMovies(searchText);
  };
  const handleClick = () => {
    dispatch(actions.initMovieData(page, "init"));
    setSearchText("");
  };

  const handleClickPopular = () => {
    dispatch(actions.popularMovies(1, "popular"));
  };
  return (
    <div>
      <div className={classes.navbar}>
        <Link
          onClick={handleClick}
          to="/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 className={classes.home}>Home</h4>
        </Link>
        <Link
          onClick={handleClickPopular}
          to="/upcoming-movies"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 className={classes.home}>Upcoming Movies</h4>
        </Link>
        <button className={classes.button} onClick={submit}>
          Search
        </button>
        <form onSubmit={submit}>
          <input
            type="text"
            className={classes.search}
            value={searchText}
            onChange={handleInput}
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
  );
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getSearchedMovies: (searchText) =>
//       dispatch(actions.searchMovie(searchText)),
//     fetchMoviesList: () => {
//       dispatch(actions.initMovieData());
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(Navbar);
export default Navbar;
