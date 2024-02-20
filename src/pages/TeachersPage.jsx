import { FiltersBar } from 'components/FiltersBar/FiltersBar';
import { TeacherCard } from 'components/TeacherCard/TeacherCard';
// import { TeacherList } from 'components/TeachersList/TeachersList';

export default function TeachersPage() {
  return (
    <>
      <div>Teachers Page</div>
      <FiltersBar />
      <TeacherCard/>
    </>
  );
}
