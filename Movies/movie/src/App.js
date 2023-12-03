import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import { moviesData } from "./Components/Data";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: 0,
  });

  useEffect(() => {
    setMovies(moviesData);
    setFilteredMovies(moviesData);
  }, []);

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
    filterMovies(event.target.value, ratingFilter);
  };

  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
    filterMovies(titleFilter, event.target.value);
  };

  const filterMovies = (title, rating) => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rate >= rating
      );
    });
    setFilteredMovies(filtered);
  };

  const handleAddMovie = () => {
    setShowForm(true);
  };

  const handleFormInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, description, posterUrl, rating } = newMovie;

    const movie = {
      id: movies.length + 1,
      title: title,
      description: description,
      posterUrl: posterUrl,
      rate: parseInt(rating),
    };

    setMovies((prevMovies) => [...prevMovies, movie]);
    filterMovies(titleFilter, ratingFilter);
    setNewMovie({
      title: "",
      description: "",
      posterUrl: "",
      rating: 0,
    });
    setShowForm(false);
  };

  return (
    <div className="container">
      <h1>Movie App</h1>
      <Filter
        onTitleChange={handleTitleChange}
        onRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies} />
      {!showForm ? (
        <button className="btn btn-primary" onClick={handleAddMovie}>
          Add Movie
        </button>
      ) : (
        <form className="inp" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={newMovie.title}
              onChange={handleFormInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={newMovie.description}
              onChange={handleFormInputChange}
              className="form-control"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Poster URL</label>
            <input
              type="text"
              name="posterUrl"
              value={newMovie.posterUrl}
              onChange={handleFormInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Rating</label>
            <input
              type="number"
              name="rating"
              value={newMovie.rating}
              onChange={handleFormInputChange}
              className="form-control"
              min="0"
              max="5"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default App;
