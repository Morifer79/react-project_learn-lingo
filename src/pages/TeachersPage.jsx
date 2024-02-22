import { AuthDetails } from 'components/Auth/AuthDetails';
import { Login } from 'components/Auth/Login';
import { SignUp } from 'components/Auth/SignUp';
import { FiltersBar } from 'components/FiltersBar/FiltersBar';
// import { TeacherList } from 'components/TeachersList/TeachersList';

export default function TeachersPage() {
  return (
    <>
      <div>Teachers Page</div>
      <FiltersBar />
      {/* <TeacherList/> */}
      {/* временно */}
      <SignUp/>
      <Login/>
      <AuthDetails/>
    </>
  );
}
