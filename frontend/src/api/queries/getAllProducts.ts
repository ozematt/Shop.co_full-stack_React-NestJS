import { productsSchema, type Products } from '../../lib/types';
import { API_BASE } from '../constants';

const getAllProducts = async (): Promise<Products> => {
  try {
    const response = await fetch(`${API_BASE}/products?limit=0`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const products: unknown = await response.json();
    const validateProducts = productsSchema.safeParse(products);

    if (!validateProducts.success) {
      console.error('Validation error:', validateProducts.error);
      throw new Error('Validation failed: ' + validateProducts.error);
    }
    const validProducts: Products = validateProducts.data;
    return validProducts;
  } catch (error) {
    console.error('There has been a problem with fetch', error);
    throw error;
  }
};

export default getAllProducts;
