import React from 'react';
import { Trash2, Plus, Minus } from '../icons';
import { useCart } from '../../context/CartContext';
import type { Product } from '../../services/api';

interface CartItemProps {
  product: Product & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="font-medium">{product.title}</h3>
          <p className="text-blue-600">${product.discountedPrice}</p>
          <div className="flex items-center space-x-2 mt-2">
            <button
              onClick={() => updateQuantity(product.id, product.quantity - 1)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center">{product.quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, product.quantity + 1)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(product.id)}
        className="text-red-500 hover:text-red-700"
        aria-label="Remove item"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CartItem;