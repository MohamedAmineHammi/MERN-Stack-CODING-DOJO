import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.posterUrl} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <div className="rating">
          {[...Array(movie.rate)].map((_, index) => (
            <span key={index} className="star-icon">
              &#9733;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
