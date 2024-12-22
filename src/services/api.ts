const API_BASE_URL = 'https://api.noroff.dev/api/v1/online-shop';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      discountedPrice: item.discountedPrice || item.price,
      imageUrl: item.image?.url || item.imageUrl,
      rating: item.rating || 0,
      reviews: item.reviews || []
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProduct = async (id: string): Promise<Product> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const item = await response.json();
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      discountedPrice: item.discountedPrice || item.price,
      imageUrl: item.image?.url || item.imageUrl,
      rating: item.rating || 0,
      reviews: item.reviews || []
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};