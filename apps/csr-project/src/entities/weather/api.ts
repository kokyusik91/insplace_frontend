import { fetchInstance } from '@/services';
import { TodayWeather } from './model';

export const getTodaysWeather = () =>
  fetchInstance.get<TodayWeather>('http://localhost:3000/weather/today');
