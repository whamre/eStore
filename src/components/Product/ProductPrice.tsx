import React from 'react';

interface ProductPriceProps {
  price: number;
  discountedPrice: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price, discountedPrice }) => {
  const discount = price - discountedPrice;
  const discountPercentage = Math.round((discount / price) * 100);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-2xl font-bold text-gray-900">
        ${discountedPrice.toFixed(2)}
      </span>
      {discount > 0 && (
        <>
          <span className="text-lg text-gray-500 line-through">
            ${price.toFixed(2)}
          </span>
          <span className="text-green-600 font-semibold">
            {discountPercentage}% off
          </span>
        </>
      )}
    </div>
  );
};

export default ProductPrice;