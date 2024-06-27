// src/components/AddEditMovie.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, editMovie } from '../redux/actions';
import StarRating from './StarRating';
import '../App.css';

const AddEditMovie = ({ movieId, onClose }) => {
  const dispatch = useDispatch();
  const movie = useSelector((state) =>
    state.movies.find((m) => m.id === movieId)
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setDescription(movie.description);
      setReleaseYear(movie.releaseYear);
      setGenre(movie.genre);
      setRating(movie.rating);
      setReview(movie.review);
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieData = {
      id: movieId || Date.now(),
      title,
      description,
      releaseYear,
      genre,
      rating,
      review,
      watched: movie?.watched || false,
    };
    if (movie) {
      dispatch(editMovie(movieData));
    } else {
      dispatch(addMovie(movieData));
    }
    onClose();
  };

  return (
    <div className="modal">
      <h2>{movie ? 'Edit Movie' : 'Add Movie'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="number"
          placeholder="Release Year"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <StarRating rating={rating} onRate={setRating} />
        <textarea
          placeholder="Write a review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddEditMovie;
