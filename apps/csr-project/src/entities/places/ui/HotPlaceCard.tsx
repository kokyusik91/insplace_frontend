import { PlaceModel } from '../mode';

type HotPlaceCardProps = {
  place: PlaceModel;
};

function HotPlaceCard({ place }: HotPlaceCardProps) {
  return (
    <li className='mb-4'>
      <div className='rounded-lg overflow-hidden mb-2'>
        <img
          src={
            place?.images[0]?.imageUrl ??
            'https://a0.muscache.com/im/pictures/8e553b51-b74e-4e78-b096-e5a65e121499.jpg?im_w=720'
          }
          alt={place.title}
        />
      </div>
      <h1 className='font-semibold text-gray-800'>{place.title}</h1>
      <p className='text-sm font-light text-gray-500'>{place.category.label}</p>
      <p className='text-sm font-light text-gray-500'>{place.address}</p>
      <p className='text-sm font-light text-gray-500'>{place.contractNumber}</p>
    </li>
  );
}

export default HotPlaceCard;
