import { createBrowserRouter } from 'react-router-dom';

import Main from '@/pages/Main';
import Sub from '@/pages/Sub';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/sub',
    element: <Sub />,
  },
]);

export default router;
