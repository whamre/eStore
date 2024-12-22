import React from 'react';
import type { Product } from '../../services/api';

interface CartSummaryProps {
  items: (Product & { quantity: number })[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ items }) => {
  const total = items.reduce((sum, item) => sum + (item.discountedPrice * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Items ({totalItems})</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;