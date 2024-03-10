export type PlaceModel = {
  id: number;
  images: ImagesModel[];
  title: string;
  description: string;
  address: string;
  source: string;
  contractNumber: string;
  category: CategoryModel;
  weather: WeatherModel;
};

type ImagesModel = {
  id: number;
  imageUrl: string;
};

type WeatherModel = {
  weather: {
    id: number;
    weathers: Weather[];
  };
};

type Weather = {
  label: string;
  value: string;
};

type CategoryModel = {
  id: number;
  value: string;
  label: string;
};
