import { z } from 'zod';

//// BUTTON TYPES
export type ButtonProps = {
  accent?: boolean;
  children: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

//// CHECKOUT TYPES
const itemSchema = z.object({
  productName: z.string(),
  image: z.string().url(),
  price: z.number(),
  quantity: z.number(),
});

export const orderDataSchema = z.object({
  total: z.number(),
  orderItems: z.array(itemSchema),
});

const itemsSchema = z.object({
  id: z.number(),
  order_id: z.number(),
  productName: z.string(),
  image: z.string().url(),
  price: z.string(),
  quantity: z.number(),
});

export const ordersSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  total: z.number(),
  createdAt: z.string(),
  orderItems: z.array(itemsSchema),
});

export type OrdersT = z.infer<typeof ordersSchema>;
export type OrderData = z.infer<typeof orderDataSchema>;
export type OrderItem = z.infer<typeof itemsSchema>;

const cartRecord = z.object({
  id: z.number(),
  title: z.string(),
  category: z.string(),
  discountPercentage: z.number(),
  image: z.string().url(),
  price: z.number(),
  purchaseTotal: z.number(),
  quantity: z.number(),
  shippingTime: z.string(),
  stock: z.number(),
});

export const cartLocalStorageSchema = z.object({
  entities: z.record(cartRecord),
  ids: z.array(z.number()),
  itemsInCart: z.number(),
  subtotal: z.number(),
  total: z.number(),
});

export const userLocalStorageSchema = z.object({
  id: z.number(),
  username: z.string(),
});
export type UserLocalStorage = z.infer<typeof userLocalStorageSchema>;

//// COMMENT TYPES
export type CommentProps = {
  rating: number;
  name: string;
  text: string;
  date?: string;
};

//// DETAILS TYPES
type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

export type DetailsProps = {
  brand?: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
};

//// DETAILS BUTTON TYPES
export type DetailsButtonProps = {
  onClick: () => void;
  details: string;
  children: string;
  title: string;
};

////FILTERS TYPES

////INPUT TYPES
export type InputProps = {
  icon: string;
  alt: string;
  type: string;
  placeholder: string;
};

//// SIGNUP TYPES
export const signUpSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email' }),
    password: z
      .string()
      .min(6, { message: 'Must be at last 6 characters long' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Must be at last 6 characters long' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;

////LOGIN TYPES
export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    })
    .min(3, { message: 'Must be 3 or more characters long' })
    .email({ message: 'Invalid email' }),

  password: z.string().min(5, { message: 'Password is required' }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

//// MYACCOUNT TYPES
export const ordersLocalStorageSchema = z.array(orderDataSchema);
export type Orders = z.infer<typeof ordersLocalStorageSchema>;

////PAGINATIONBAR TYPES
export type PaginationBarProps = {
  total: number;
  page: number;
};

////PRODUCT TYPES
const reviewSchema = z.object({
  rating: z.number().min(0).max(5),
  comment: z.string(),
  date: z.string().datetime(),
  reviewerName: z.string(),
  reviewerEmail: z.string().email(),
});

const dimensionsSchema = z.object({
  width: z.number().positive(),
  height: z.number().positive(),
  depth: z.number().positive(),
});

const metaSchema = z.object({
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  barcode: z.string(),
  qrCode: z.string().url(),
});

const productItemSchema = z.object({
  id: z.number().positive(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number().positive(),
  discountPercentage: z.number().min(0).max(100),
  rating: z.number().min(0).max(5),
  stock: z.number().nonnegative(),
  tags: z.array(z.string()),
  brand: z.string().optional(),
  sku: z.string(),
  weight: z.number().positive(),
  dimensions: dimensionsSchema,
  warrantyInformation: z.string(),
  shippingInformation: z.string(),
  availabilityStatus: z.string(),
  reviews: z.array(reviewSchema),
  returnPolicy: z.string(),
  minimumOrderQuantity: z.number().positive(),
  meta: metaSchema,
  images: z.array(z.string().url()),
  thumbnail: z.string().url(),
});
export type ProductItemSchema = z.infer<typeof productItemSchema>;

export const productsSchema = z.object({
  products: z.array(productItemSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});
export type Products = z.infer<typeof productsSchema>;

export type ProductProps = {
  id: number;
  title: string;
  thumbnail?: string;
  price: number;
  rating: number;
  images: string[];
  discountPercentage: number;
  category: string;
  onClick?: () => void;
};

export type SortingOptions = {
  field: string;
  direction?: string;
};

export type SortMethod =
  | 'Alphabetical'
  | 'Hightest Price'
  | 'Lowest Price'
  | 'Top Rated'
  | 'Least Rated';

export type ProductsInitialState = {
  sortOptions: SortingOptions;
  filteredProductsByCategory: null | Products;
  fetchedProducts: Products;
};

////PRODUCTIMAGE TYPES
export type ProductImagesProps = {
  images: string[];
};

////QUANTITYBUTTON TYPES
export type QuantityButtonProps = {
  onDecrement: () => void;
  onIncrement: () => void;
  quantity: number;
};

//// SEARCHENGIN TYPES
export type FilteredProduct = {
  id: number;
  title: string;
  category: string;
};

////SHOPINFOBAR TYPES
export type ShopInfoBarProps = {
  first: number;
  second: number;
  total: number;
};

////CATEGORIES TYPES
export const categoryArray = z.array(z.string());
export type Category = z.infer<typeof categoryArray>;

////USER TYPES
const coordinatesSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});

const addressSchema = z.object({
  address: z.string(),
  city: z.string(),
  state: z.string(),
  stateCode: z.string(),
  postalCode: z.string(),
  coordinates: coordinatesSchema,
  country: z.string(),
});

export type UserAddress = z.infer<typeof addressSchema>;

const hairSchema = z.object({
  color: z.string(),
  type: z.string(),
});

const bankSchema = z.object({
  cardExpire: z.string(),
  cardNumber: z.string(),
  cardType: z.string(),
  currency: z.string(),
  iban: z.string(),
});

const companySchema = z.object({
  department: z.string(),
  name: z.string(),
  title: z.string(),
  address: addressSchema,
});

const cryptoSchema = z.object({
  coin: z.string(),
  wallet: z.string(),
  network: z.string(),
});

export const userSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  maidenName: z.string(),
  age: z.number(),
  gender: z.enum(['male', 'female', 'other']),
  email: z.string().email(),
  phone: z.string(),
  username: z.string(),
  password: z.string(),
  birthDate: z.string(),
  image: z.string().optional(),
  bloodGroup: z.string(),
  height: z.number(),
  weight: z.number(),
  eyeColor: z.string(),
  hair: hairSchema,
  ip: z.string(),
  address: addressSchema,
  macAddress: z.string(),
  university: z.string(),
  bank: bankSchema,
  company: companySchema,
  ein: z.string(),
  ssn: z.string(),
  userAgent: z.string(),
  crypto: cryptoSchema,
  role: z.enum(['admin', 'moderator', 'user']),
});

export type User = z.infer<typeof userSchema>;

export type UserInitialState = {
  username: null | string;
  orders: OrderData[];
};

////CART TYPES
export const cartItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  category: z.string(),
  discountPercentage: z.number(),
  image: z.string().url(),
  price: z.number(),
  purchaseTotal: z.number(),
  quantity: z.number(),
  shippingTime: z.string(),
  stock: z.number(),
});

export type CartItemT = z.infer<typeof cartItemSchema>;

//// USEDISCOUNT TYPES
export type UseDiscountProps = {
  discountPercentage: number;
  price: number;
};

////USEPANELOPEN TYPES
export type UsePanelOpenProps = {
  refValue: React.RefObject<HTMLDivElement>;
};

////USEQUANTITY TYPES
export type UseQuantityProps = {
  stock: number;
};

////USEREDIRECTTOPRODUCT TYPES
export type SelectedProduct = {
  id: number;
  title: string;
  category: string;
};
