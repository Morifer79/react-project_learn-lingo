import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader';
import styled from 'styled-components';

const GlobalContainer = styled.div`
  margin: 0 auto;
  inline-size: 100%;
  padding-inline: 20px;
  max-inline-size: 767px;

  @media screen and (min-width: 768px) {
    max-inline-size: 1439px;
    padding-inline: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-inline-size: 1440px;
    padding-inline: 64px;
  }
`;

export const SharedLayout = () => {
  const location = useLocation();
  const userLocation =
    location.pathname === '/' ||
    location.pathname === '/teachers' ||
    location.pathname === '/favorites';
  return (
    <GlobalContainer>
      {userLocation && <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </GlobalContainer>
  );
};
