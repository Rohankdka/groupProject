import React, { useState } from 'react';

function Review() {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (e) => {
    e.preventDefault();
    const newReview = {
      title,
      description,
      rating,
    };
    setReviews([...reviews, newReview]);
    setTitle('');
    setDescription('');
    setRating('');
    setShowReviewForm(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowReviewForm(true)}
      >
        ADD Review
      </button>
      {showReviewForm && (
        <form className="mt-4" onSubmit={handleAddReview}>
          <label className="block mb-2" htmlFor="title">
            Title:
          </label>
          <input
            className="block w-full p-2 mb-2 border border-gray-400"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="block mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            className="block w-full p-2 mb-2 border border-gray-400"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="block mb-2" htmlFor="rating">
            Rating:
          </label>
          <select
            className="block w-full p-2 mb-2 border border-gray-400"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            ADD
          </button>
        </form>
      )}
      <div className="mt-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-100 p-4 mb-4">
            <h3 className="text-lg font-bold">{review.title}</h3>
            <p>{review.description}</p>
            <p>Rating: {review.rating} stars</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;