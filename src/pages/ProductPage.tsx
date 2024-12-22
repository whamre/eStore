import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/api';
import type { Product } from '../services/api';
import ProductPrice from '../components/Product/ProductPrice';
import ProductReviews from '../components/Product/ProductReviews';
import AddToCartButton from '../components/Product/AddToCartButton';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (err) {
        setError('Failed to load product. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error || 'Product not found'}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          
          <ProductPrice 
            price={product.price} 
            discountedPrice={product.discountedPrice} 
          />
          
          <div className="prose max-w-none">
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="py-4">
            <AddToCartButton product={product} />
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            <ProductReviews reviews={product.reviews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;