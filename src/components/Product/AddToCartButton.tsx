import React from 'react';
import { ShoppingCart } from '../icons';
import { useCart } from '../../context/CartContext';
import type { Product } from '../../services/api';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
    >
      <ShoppingCart className="w-5 h-5" />
      <span>Add to Cart</span>
    </button>
  );
};

export default AddToCartButton;