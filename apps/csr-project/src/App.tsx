import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';

import Main from './pages/Main';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

export default App;
