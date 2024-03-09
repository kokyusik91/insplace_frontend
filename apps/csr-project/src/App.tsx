import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './pages/Router';

// 최상단 컴포넌트
function App() {
  const queryClient = new QueryClient();
  console.log('App 렌더링');

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
