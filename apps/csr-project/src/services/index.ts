import { Kofetch } from 'kofetch';

const fetchInstance = Kofetch.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getProducts = () =>
  fetchInstance.get('https://fakestoreapi.com/products');
