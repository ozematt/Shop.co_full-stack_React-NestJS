import { PRODUCTS } from '../constants';
import { z } from 'zod';

const ReviewSchema = z.object({
  rating: z.number().min(0).max(5),
  comment: z.string(),
  date: z.string().datetime(),
  reviewerName: z.string(),
  reviewerEmail: z.string().email(),
});

const DimensionsSchema = z.object({
  width: z.number().positive(),
  height: z.number().positive(),
  depth: z.number().positive(),
});

const MetaSchema = z.object({
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  barcode: z.string(),
  qrCode: z.string().url(),
});

const ItemSchema = z.object({
  id: z.number().positive(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number().positive(),
  discountPercentage: z.number().min(0).max(100),
  rating: z.number().min(0).max(5),
  stock: z.number().nonnegative(),
  tags: z.array(z.string()),
  brand: z.string(),
  sku: z.string(),
  weight: z.number().positive(),
  dimensions: DimensionsSchema,
  warrantyInformation: z.string(),
  shippingInformation: z.string(),
  availabilityStatus: z.string(),
  reviews: z.array(ReviewSchema),
  returnPolicy: z.string(),
  minimumOrderQuantity: z.number().positive(),
  meta: MetaSchema,
  images: z.array(z.string().url()),
  thumbnail: z.string().url(),
});

const ProductSchema = z.object({
  products: z.array(ItemSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});
export type Product = z.infer<typeof ProductSchema>;

const getProductsByCategory = async (
  category: string | undefined,
): Promise<Product> => {
  if (!category) {
    throw new Error('Category is required');
  }
  try {
    const response = await fetch(`${PRODUCTS}/category/${category}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const productsByCategory: unknown = await response.json();
    const validateProducts = ProductSchema.safeParse(productsByCategory);

    if (!validateProducts.success) {
      console.error('Validation error:', validateProducts.error);
      throw new Error('Validation failed: ' + validateProducts.error);
    }
    const validProducts: Product = validateProducts.data;
    console.log(validProducts);

    return validProducts;
  } catch (error) {
    console.error('There has been a problem with fetch', error);
    throw error;
  }
};

export default getProductsByCategory;
