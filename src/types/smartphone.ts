export interface Products {
  products: Array<Smartphone>;
  total: number;
  skip: number;
  limit: number;
}

export interface Smartphone {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export type SmartphonesSortOptionsType = Pick<Smartphone, 'title' | 'rating' | 'price'>;
