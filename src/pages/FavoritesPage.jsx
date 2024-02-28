import fav from 'images/favorite.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchData } from '../redux/operations';
import { Favorite } from 'components/Favorite';

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
