import { getPlaceById } from '@/entities/places/api';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Place() {
  const params = useParams();
  const placeId = Number(params.placeId);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const { data: place } = useQuery({
    queryKey: ['places', placeId],
    queryFn: () => getPlaceById(placeId),
    enabled: !!placeId,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  console.log('placeplace', place);

  return (
    <main>
      <button onClick={handleBack}>
        <ArrowLeft />
      </button>
    </main>
  );
}
