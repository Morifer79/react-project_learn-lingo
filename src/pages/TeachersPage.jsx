import { FiltersBar } from 'components/FiltersBar/FiltersBar';
import { TeachersList } from 'components/Teachers/TeachersList';
import { theme } from 'components/theme';
import styled from 'styled-components';

const TeachersPageWrapper = styled.div`
  background-color: ${theme.colors.back};
`;

const Wrapper = styled.div`
  padding-inline-start: 122px;
`;

export default function TeachersPage() {
  return (
    <TeachersPageWrapper>
      <Wrapper>
        <FiltersBar />
      </Wrapper>
      <TeachersList />
    </TeachersPageWrapper>
  );
}
