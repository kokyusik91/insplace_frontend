import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import router from './router';

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
