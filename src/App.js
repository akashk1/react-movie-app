import Movies from "./components/movies/movies";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieDetail from "./components/movie/movieDetail/movieDetail";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/movie-details/:id" component={MovieDetail} />
        <Route exact path="/upcoming-movies" component={Movies} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
