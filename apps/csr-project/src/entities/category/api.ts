import { fetchInstance } from '@/services';
import { CategoryModel } from './model';

export const getCategories = () =>
  fetchInstance.get<CategoryModel[]>('http://localhost:3000/category');
