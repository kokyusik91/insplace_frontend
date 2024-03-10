import { createBrowserRouter } from 'react-router-dom';

import Main from '@/pages/Main';
import LoginPage from '@/pages/login';
import SignupPage from '@/pages/sign-up';
import Place from '@/pages/place';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <div>하핫 에러 발생 😵</div>,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/place/:placeId',
    element: <Place />,
  },
]);

export default router;
