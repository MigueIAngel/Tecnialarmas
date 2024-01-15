// StarRating.js
import React from 'react';

const StarReviews = ({ stars }) => {
  const renderStars = () => {
    const starArray = [];
    for (let i = 0; i < stars; i++) {
      starArray.push(<span key={i}>★</span>);
    }
    return starArray;
  };

  return <div className="star-Reviews">{renderStars()}</div>;
};

export default StarReviews;
