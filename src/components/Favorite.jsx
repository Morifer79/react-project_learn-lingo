import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { TeacherCard } from './Teachers/TeacherCard/TeacherCard';

export const Favorite = () => {
  const favoriteTeachers = useSelector(selectFavorites);
  return (
    <>
      {favoriteTeachers.map(card => (
        <TeacherCard key={card.id} card={card} />
      ))}
    </>
  );
};
