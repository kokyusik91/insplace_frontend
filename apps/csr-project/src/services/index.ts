import { Kofetch } from 'kofetch';

export const fetchInstance = Kofetch.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getProducts = () =>
  fetchInstance.get('https://fakestoreapi.com/products');
