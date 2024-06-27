// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MovieList from './components/MovieList';
import AddEditMovie from './components/AddEditMovie';
import MovieDetail from './components/MovieDetail';

const App = () => {
  const [editingMovieId, setEditingMovieId] = useState(null);
  const [viewingMovieId, setViewingMovieId] = useState(null);

  const handleEdit = (id) => {
    setEditingMovieId(id);
  };

  const handleClose = () => {
    setEditingMovieId(null);
    setViewingMovieId(null);
  };

  return (
    <Provider store={store}>
      <div className="app">
        <h1>Movie Watchlist</h1>
        <button onClick={() => setEditingMovieId('new')}>Add Movie</button>
        <MovieList onEdit={handleEdit} onToggleWatched={handleEdit} />
        {editingMovieId && (
          <AddEditMovie movieId={editingMovieId} onClose={handleClose} />
        )}
        {viewingMovieId && (
          <MovieDetail movieId={viewingMovieId} onClose={handleClose} />
        )}
      </div>
    </Provider>
  );
};

export default App;
