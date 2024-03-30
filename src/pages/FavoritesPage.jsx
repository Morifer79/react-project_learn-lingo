import fav from '../images/favorite.png';
import { selectFavorites } from '../redux/selectors';
import { Favorite } from 'components/Favorite';
import { useSelector } from 'react-redux';

export default function FavoritesPage() {

  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length > 0 ? (
        <Favorite />
      ) : (
        <img src={fav} alt="no favorites" />
      )}
    </>
  );
}
