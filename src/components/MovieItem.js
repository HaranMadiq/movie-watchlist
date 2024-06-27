// src/components/MovieItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleWatched } from '../redux/actions';
import StarRating from './StarRating';
import '../App.css';

const MovieItem = ({ movie, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this movie?');
    if (confirmDelete) {
      dispatch(deleteMovie(movie.id));
    }
  };

  const handleToggleWatched = () => {
    dispatch(toggleWatched(movie.id));
  };

  return (
    <div className="movie-item">
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Release Year: {movie.releaseYear}</p>
        <p>Genre: {movie.genre}</p>
        <p>Status: {movie.watched ? 'Watched' : 'Unwatched'}</p>
        <StarRating rating={movie.rating} />
        <p>Review: {movie.review}</p>
        <div>
          <button onClick={() => onEdit(movie.id)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleToggleWatched}>
            {movie.watched ? 'Mark as Unwatched' : 'Mark as Watched'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
