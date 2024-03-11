import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../api';
import CategoryButton from './CategoryButton';

type CategoryButtonListProps = {
  categoryId: number;
  handleClick: (id: number) => void;
};

export default function CategoryButtonList({
  categoryId,
  handleClick,
}: CategoryButtonListProps) {
  const { data: categories } = useQuery({
    queryKey: ['category'],
    queryFn: getCategories,
    select: (data) =>
      data.map((item) =>
        item.value === ''
          ? { ...item, value: 'all', label: '전체' }
          : { ...item }
      ),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return (
    <ul className='flex gap-6 my-5'>
      {categories?.map((item) => (
        <CategoryButton
          key={item.id}
          category={item}
          onClick={() => {
            handleClick(item.id);
          }}
          isActive={categoryId === item.id}
        />
      ))}
    </ul>
  );
}
