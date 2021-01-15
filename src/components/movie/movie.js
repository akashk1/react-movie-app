import React from "react";
import classes from "./movie.module.css";
import { IMG_API } from "../../API";
import { Link } from "react-router-dom";

const movie = (props) => {
  const path = "/movie-details/" + props.index;
  const secondaryImage =
    "https://image.shutterstock.com/image-vector/movie-time-poster-vintage-cinema-260nw-1480643543.jpg";
  const posterPath = props.data.backdrop_path
    ? props.data.backdrop_path
    : props.data.poster_path;
  const imagePath = posterPath ? IMG_API + posterPath : secondaryImage;
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <div className={classes.movie}>
        <img src={imagePath} alt={props.data.title} />
        <div className={classes.movieInfo}>
          <h3> {props.data.title}</h3>
          <span style={{ color: "white" }}>{props.data.vote_average}</span>
        </div>
      </div>
    </Link>
  );
};

export default movie;
