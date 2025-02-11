import { type Products, productsSchema } from '../../lib/types';
import { API_BASE } from '../constants';

const getProductsByCategory = async (
  category: string | undefined,
): Promise<Products> => {
  if (!category) {
    throw new Error('Category is required');
  }
  try {
    const response = await fetch(API_BASE + `/products/category/${category}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const productsByCategory: unknown = await response.json();
    const validateProducts = productsSchema.safeParse(productsByCategory);

    if (!validateProducts.success) {
      console.error('Validation error:', validateProducts.error);
      throw new Error('Validation failed: ' + validateProducts.error);
    }
    const validProducts: Products = validateProducts.data;
    console.log(validProducts);

    return validProducts;
  } catch (error) {
    console.error('There has been a problem with fetch', error);
    throw error;
  }
};

export default getProductsByCategory;
