/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!

export const home = async (req, res) => {
  try {
    //await Movie.deleteMany({});
    const movies = await Movie.find({}).sort({ _id: -1 });

    res.render("movies", { movies });
  } catch (error) {
    res.render("movies", { movies: [] });
  }
};

export const getCreateMovie = (req, res) => {
  res.render("create");
};

export const postCreateMovie = async (req, res) => {
  const {
    body: { title, year, rating, genre, snopsis }
  } = req;
  try {
    const newMovie = await Movie.create({
      title,
      year,
      rating,
      snopsis,
      genre: genre.split(",")
    });
    res.redirect(`/${newMovie._id}`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

export const movieDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  console.log(id);

  try {
    const movie = await Movie.findById(id);
    res.render("movieDetail", { movie });
  } catch (error) {
    res.redirect("/");
  }
};

export const getEditMovie = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const movie = await Movie.findById(id);
    const genres = movie.genre.join();
    res.render("edit", { movie, genres });
  } catch (error) {
    console.log(error);
    res.redner("/");
  }
};

export const postEditMovie = async (req, res) => {
  const {
    params: { id },
    body: { title, year, rating, snopsis, genre }
  } = req;
  try {
    await Movie.findByIdAndUpdate(
      { _id: id },
      { title, year, rating, snopsis, genre: genre.split() }
    );
    res.redirect(`/${id}`);
  } catch (error) {
    res.redirect("/");
  }
};

export const deleteMovie = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    await Movie.findByIdAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect("/");
};

export const searchMovie = async (req, res) => {
  const {
    query: { condition }
  } = req;

  console.log(condition);

  switch (condition) {
    case "rating":
      try {
        const {
          query: { term }
        } = req;
        const movies = await Movie.find({ rating: term });
        res.render("movies", { movies, SearchTerm: `Searching By ${term}` });
      } catch (error) {
        console.log(error);
      }

      break;
    case "year":
      try {
        const {
          query: { term }
        } = req;
        const movies = await Movie.find({ year: term });
        res.render("movies", { movies, SearchTerm: `Searching By ${term}` });
      } catch (error) {
        console.log(error);
      }

      break;
    case "term":
      try {
        const {
          query: { term }
        } = req;
        const movies = await Movie.find({
          title: { $regex: term, $options: "i" }
        });
        console.log(movies);

        res.render("movies", { movies, SearchTerm: `Searching By ${term}` });
      } catch (error) {
        console.log(error);
      }

      break;
    default:
      break;
  }
};
