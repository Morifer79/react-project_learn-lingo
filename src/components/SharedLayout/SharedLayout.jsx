import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader';
import { GlobalContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <GlobalContainer>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </GlobalContainer>
  );
};