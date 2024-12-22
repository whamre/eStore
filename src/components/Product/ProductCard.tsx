import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../services/api';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const discount = product.price - product.discountedPrice;
  const discountPercentage = Math.round((discount / product.price) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={product.imageUrl} 
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-lg font-bold text-gray-900">
              ${product.discountedPrice}
            </span>
            {discount > 0 && (
              <>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${product.price}
                </span>
                <span className="ml-2 text-sm text-green-600">
                  {discountPercentage}% off
                </span>
              </>
            )}
          </div>
          <div className="text-yellow-400">
            {'★'.repeat(Math.round(product.rating))}
            {'☆'.repeat(5 - Math.round(product.rating))}
          </div>
        </div>
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;