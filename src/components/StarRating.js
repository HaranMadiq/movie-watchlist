// src/components/StarRating.js
import React from 'react';
import '../App.css';

const StarRating = ({ rating, onRate }) => {
  const handleRate = (rate) => {
    if (onRate) {
      onRate(rate);
    }
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'star filled' : 'star'}
          onClick={() => handleRate(star)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
