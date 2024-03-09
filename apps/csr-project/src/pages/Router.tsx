import { createBrowserRouter } from 'react-router-dom';
import Main from './Main';
import Sub from './Sub';

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
