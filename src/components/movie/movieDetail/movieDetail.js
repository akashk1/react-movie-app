import React from "react";
import { IMG_API } from "../../../API";
import classes from "./movieDetail.module.css";
import { useSelector } from "react-redux";
const MovieDetail = (props) => {
  const movies = useSelector((state) => state.data);
  const secondaryImage =
    "https://image.shutterstock.com/image-vector/movie-time-poster-vintage-cinema-260nw-1480643543.jpg";
  const id = props.match.params.id;
  const imagePath = movies[id].poster_path
    ? IMG_API + movies[id].poster_path
    : secondaryImage;

  return (
    <div className={classes.movie}>
      <img src={imagePath} alt={movies[id].title} />
      <div className={classes.movieInfo}>
        <h3>Movie : {" " + movies[id].title}</h3>

        <h4>Rating :{" " + movies[id].vote_average}</h4>
        <h4>Overview:</h4>
        <h5 style={{ fontSize: "20px" }}>{movies[id].overview}</h5>
        <h4>
          Release Date:{" "}
          <span style={{ fontSize: "22px" }}>
            {+" " + movies[id].release_date}
          </span>
        </h4>
      </div>
    </div>
  );
};

export default MovieDetail;
