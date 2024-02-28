import { TeacherCard } from 'components/Teachers/TeacherCard/TeacherCard';
import { useEffect, useState } from 'react';
import { BtnLoadMore, BtnWrapper } from './TeacherCard/TeacherCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectTeachers } from '../../redux/selectors';
import { fetchData } from '../../redux/operations';

export const TeachersList = () => {
  const [renderCard, setRenderCard] = useState(4);
  const loadMore = () => setRenderCard(prevState => prevState + 4);

  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {teachers.length > 0 && (
        <ul>
          {teachers.map(teacher => (
            <li key={teacher.id}>
              <TeacherCard card={teacher} />
            </li>
          ))}
        </ul>
      )}

      {renderCard <= teachers.length && (
        <BtnWrapper>
          <BtnLoadMore onClick={loadMore}>Load more</BtnLoadMore>
        </BtnWrapper>
      )}
    </>
  );
};
