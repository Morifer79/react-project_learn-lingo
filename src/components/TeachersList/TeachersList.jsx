import { TeacherCard } from 'components/TeacherCard/TeacherCard';

export const TeacherList = ({ items, onOpen }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <TeacherCard card={item} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
};