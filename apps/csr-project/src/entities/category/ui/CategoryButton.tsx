import { Bike, Coffee, Palette, PlaneTakeoff, Wallet } from 'lucide-react';
import { CategoryModel } from '../model';

type CategoryButtonProps = {
  category: CategoryModel;
  onClick: () => void;
  isActive: boolean;
};

const CATEGORY_ICON = [
  {
    value: 'all',
    icon: <Wallet />,
  },
  {
    value: 'travel',
    icon: <PlaneTakeoff />,
  },
  {
    value: 'cafe',
    icon: <Coffee />,
  },
  {
    value: 'art',
    icon: <Palette />,
  },
  {
    value: 'activity',
    icon: <Bike />,
  },
  {
    value: 'outside',
    icon: <Wallet />,
  },
];

export default function CategoryButton({
  category,
  onClick,
  isActive,
}: CategoryButtonProps) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex gap-1 justify-center items-center px-4 py-3 rounded-xl  cursor-pointer ${isActive ? 'bg-gray-800 text-slate-300' : 'bg-slate-300 text-gray-800'}`}
      >
        {CATEGORY_ICON.find((item) => item.value === category.value)?.icon}
        <span>{category.label}</span>
      </button>
    </li>
  );
}
