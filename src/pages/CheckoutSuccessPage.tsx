import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from '../components/icons';

const CheckoutSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Order Successful!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for your purchase. Your order has been received.
      </p>
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default CheckoutSuccessPage;