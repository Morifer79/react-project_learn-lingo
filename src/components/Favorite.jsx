import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { TeacherCard } from './Teachers/TeacherCard/TeacherCard';

export const Favorite = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
      {favorites.map((card, idx) => (
        <li key={idx}>
          <TeacherCard key={idx} card={card} />
        </li>
      ))}
    </>
  );
};
