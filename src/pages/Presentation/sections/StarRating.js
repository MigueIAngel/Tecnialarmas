
import React, { useState } from 'react';
import "../css/StarRating.css";
const StarRating = ({ onStarClick }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
    onStarClick(value);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`star ${value <= rating ? 'selected' : ''}`}
          onClick={() => handleStarClick(value)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
