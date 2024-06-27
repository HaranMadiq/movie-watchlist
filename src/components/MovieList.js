import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';

const MovieList = ({ onEdit, onDelete, onToggleWatched }) => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleWatched={onToggleWatched}
        />
      ))}
    </div>
  );
};

export default MovieList;