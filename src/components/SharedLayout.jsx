import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader';
import styled from 'styled-components';

const GlobalContainer = styled.div`
  /* margin: 0 auto; */
  /* max-inline-size: 1440px; */
  padding: 0 64px;
`;

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