import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Launches from './pages/launches/launches';
import '../src/styles/global.scss';
import '../src/styles/font-family.scss';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export default function App() {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 5 * 1000,
      }
    }
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Launches/>}/>
        {/*<Route path='/restaurant/:id/order' element={<Order/>}/>*/}
        {/*<Route path='/restaurant/:id/:dish' element={<Dish/>}/>*/}
        {/*<Route path="/404" element={<NotFoundPage/>}/>*/}
        {/*<Route path='*' element={<NotFoundPage/>}/>*/}
      </Routes>
    </QueryClientProvider>
  );
}
