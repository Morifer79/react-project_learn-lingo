import fav from '../images/favorite.png';
import { selectFavorites } from '../redux/selectors';
import { Favorite } from 'components/Favorite';
import { useSelector } from 'react-redux';
import { PageWrapper } from './TeachersPage';

export default function FavoritesPage() {

  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length > 0 ? (
        <PageWrapper>
          <Favorite />
        </PageWrapper>
      ) : (
        <img src={fav} alt="no favorites" />
      )}
    </>
  );
}
