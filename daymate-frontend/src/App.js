import React from 'react';
import Router from './shared/Router';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
