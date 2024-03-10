import { fetchInstance } from '@/services';
import { PlaceModel } from './mode';

export const getAllPlaces = () =>
  fetchInstance.get<PlaceModel[]>('http://localhost:3000/places');
