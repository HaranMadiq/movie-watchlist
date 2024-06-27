import { combineReducers } from 'redux';
import {
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  TOGGLE_WATCHED,
  RATE_MOVIE,
  REVIEW_MOVIE,
} from './actions';

const initialState = {
  movies: [],
};

const moviesReducer = (state = initialState.movies, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, action.payload];
    case EDIT_MOVIE:
      return state.map((movie) =>
        movie.id === action.payload.id ? action.payload : movie
      );
    case DELETE_MOVIE:
      return state.filter((movie) => movie.id !== action.payload);
    case TOGGLE_WATCHED:
      return state.map((movie) =>
        movie.id === action.payload ? { ...movie, watched: !movie.watched } : movie
      );
    case RATE_MOVIE:
      return state.map((movie) =>
        movie.id === action.payload.id ? { ...movie, rating: action.payload.rating } : movie
      );
    case REVIEW_MOVIE:
      return state.map((movie) =>
        movie.id === action.payload.id ? { ...movie, review: action.payload.review } : movie
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;