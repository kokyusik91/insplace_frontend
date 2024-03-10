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
type PlaceItemProps = {
  place: PlaceModel;
};

export function Placeitem({ place }: PlaceItemProps) {
  const image = place.images[0]?.imageUrl;

  return (
    <li className='w-[290px]'>
      <a href=''>
        <div className='w-[290px] h-[275px] rounded-xl overflow-hidden mb-3'>
          <img
            src={
              image ??
              'https://a0.muscache.com/im/pictures/e01e839c-6047-4736-a432-10bd39aacdfd.jpg?im_w=720'
            }
            alt={place.title}
            className='w-full h-full object-cover'
          />
        </div>
        <h1 className='font-semibold	text-zinc-700'>{place.title}</h1>
        <p className='text-sm	 font-normal	text-zinc-500 whitespace-pre-wrap mb-2'>
          {place.description}
        </p>
        <p className='text-sm	 font-light	text-zinc-400'>{place.address}</p>
        <span className='text-sm font-light	text-zinc-400'>
          {place.contractNumber}
        </span>
      </a>
    </li>
  );
}
