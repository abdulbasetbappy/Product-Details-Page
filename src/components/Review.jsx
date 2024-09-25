import React from "react";

// Star component to render filled or empty stars
const Star = ({ filled }) => {
  return (
    <span className={filled ? "text-yellow-500" : "text-gray-300"}>
      ★
    </span>
  );
};

// Review component
const Review = ({ rating, reviewCount }) => {
  // Convert rating to integer stars (out of 5)
  const totalStars = 5;
  const filledStars = Math.floor(rating); // Number of filled stars

  return (
    <div className="flex items-center space-x-2">
      {/* Render stars */}
      <div className="flex">
        {[...Array(totalStars)].map((_, index) => (
          <Star key={index} filled={index < filledStars} />
        ))}
      </div>
      {/* Show the review count */}
      <span className="text-gray-500">{reviewCount} 
        {reviewCount ? " Reviews" : ""}
      </span>
    </div>
  );
};

export default Review;
