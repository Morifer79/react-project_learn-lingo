import { TeacherCard } from 'components/Teachers/TeacherCard/TeacherCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredTeachers } from '../../redux/selectors';
import { fetchData } from '../../redux/operations';

export const TeachersList = ({ renderCard }) => {
  const dispatch = useDispatch();
  const filteredTeachers = useSelector(getFilteredTeachers);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <ul>
      {filteredTeachers.slice(0, renderCard).map(teacher => (
        <li key={teacher.id}>
          <TeacherCard card={teacher} />
        </li>
      ))}
    </ul>
  );
};
