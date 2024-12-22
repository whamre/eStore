import React from 'react';
import type { Review } from '../../services/api';

interface ProductReviewsProps {
  reviews: Review[];
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p className="text-gray-500">No reviews yet.</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">{review.username}</span>
            <div className="text-yellow-400">
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </div>
          </div>
          <p className="text-gray-600">{review.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;