import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout';
import { lazy } from 'react';
import { PrivateRoute } from './components/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="teachers" element={<TeachersPage />} />
        <Route
          path="favorites"
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
