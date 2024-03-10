import { useParams } from 'react-router-dom';

export default function Place() {
  const params = useParams();
  console.log(params);

  return <div>index</div>;
}
