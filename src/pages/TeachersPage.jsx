import { FiltersBar } from 'components/FiltersBar/FiltersBar';
import { theme } from 'components/theme';
import styled from 'styled-components';

const TeachersPageWrapper = styled.div`
  background-color: ${theme.colors.back};
`;

export default function TeachersPage() {
  return (
    <TeachersPageWrapper>
      <FiltersBar />
      {/* <TeacherList/> */}
    </TeachersPageWrapper>
  );
}
