import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import Launches from './pages/launches/launches';
import '/src/styles/global.scss';
import '/src/styles/font-family.scss';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import LaunchDetails from './pages/launches/launch-details/launch-details';
import ScrollToTop from './utils/scroll-to-top';

export default function App() {
  const location = useLocation();
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 5 * 1000,
        retry: 1
      }
    }
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop>
        <Routes location={location}>
          <Route path='/' element={<Launches/>}/>
          <Route path='/:id' element={<LaunchDetails/>}/>
        </Routes>
      </ScrollToTop>
    </QueryClientProvider>
  );
}
