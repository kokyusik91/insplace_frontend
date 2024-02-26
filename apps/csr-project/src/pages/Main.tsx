import { Button } from '@repo/ui/components';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services';

function Main() {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  console.log('data', data);

  return (
    <div>
      <Button
        appName='app'
        className='bg-red-300'
        variants={{ variant: 'destructive', size: 'lg' }}
      >
        dasdasdad
      </Button>
    </div>
  );
}

export default Main;
