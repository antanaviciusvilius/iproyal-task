import type { Products, Smartphone } from '@/types/smartphone';
import fetchHelper from './fetchHelper';

const PHONES_ENDPOINT = 'https://dummyjson.com/products/category/smartphones';

const getPhones = async (): Promise<Smartphone[]> => {
  const products = await fetchHelper<Products>(PHONES_ENDPOINT, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return Promise.resolve(products.products);
};

export default getPhones;
