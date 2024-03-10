import { createBrowserRouter } from 'react-router-dom';

import Main from '@/pages/Main';
import LoginPage from '@/pages/login';
import SignupPage from '@/pages/sign-up';

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
]);

export default router;
