import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

export const addMovies = (req, res) => {
  switch (req.method) {
    case "GET":
      res.render("add");
      break;

    case "POST":
      const {
        body: { title, synopsis, genre }
      } = req;

      const genres = genre.split();

      const movie = {
        title, // Should be a string!
        synopsis, // Should be a string!
        genres // Should be an array of strings.
      };

      console.log(movie);

      addMovie(movie);
      res.redirect("/");

      break;

    default:
      break;
  }
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
