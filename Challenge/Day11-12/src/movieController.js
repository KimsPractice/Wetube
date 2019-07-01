import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  res.render("movies", { movies: getMovies() });
};
export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  if (getMovieById(id)) {
    res.render("detail", { findMovie: getMovieById(id) });
  } else {
    res.render("404");
  }
};
export const filterMovie = (req, res) => {
  const {
    query: { year, rating }
  } = req;
  if (year) {
    res.render("movies", {
      movies: getMovieByMinimumYear(year)
    });
  } else if (rating) {
    res.render("movies", {
      movies: getMovieByMinimumRating(rating)
    });
  } else {
    res.render("404");
  }
};
