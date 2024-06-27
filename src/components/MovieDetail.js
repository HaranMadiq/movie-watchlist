// src/components/MovieDetail.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reviewMovie } from '../redux/actions';
import StarRating from './StarRating';
import '../App.css';

const MovieDetail = ({ movieId, onClose }) => {
  const dispatch = useDispatch();
  const movie = useSelector((state) =>
    state.movies.find((m) => m.id === movieId)
  );

  const handleReview = (e) => {
    const review = e.target.value;
    dispatch(reviewMovie(movieId, review));
  };

  return (
    <div className="modal">
      <h2>Movie Details</h2>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Status: {movie.watched ? 'Watched' : 'Unwatched'}</p>
      <StarRating rating={movie.rating} />
      <p>Review: {movie.review}</p>
      <textarea
        placeholder="Write a review"
        value={movie.review}
        onChange={handleReview}
      ></textarea>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default MovieDetail;
