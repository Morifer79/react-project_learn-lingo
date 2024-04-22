import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { TeacherCard } from './Teachers/TeacherCard/TeacherCard';
import { Wrapper } from './Teachers/TeacherCard/TeacherCard.styled';
import { FiltersBar } from './FiltersBar/FiltersBar';

export const Favorite = () => {
  const favoriteTeachers = useSelector(selectFavorites);
  return (
    <>
      <Wrapper>
        <FiltersBar />
      </Wrapper>
      {favoriteTeachers.map((card) => (
        <TeacherCard key={card.id} card={card} />
      ))}
    </>
  );
};
