import { TeacherPage } from 'components/Teachers/TeacherPage';
import { theme } from 'components/theme';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: ${theme.colors.back};
  padding-block-start: ${theme.spacing(5)};
  min-height: 100vh;
`;

export default function TeachersPage() {
  return (
    <PageWrapper>
      <TeacherPage />
    </PageWrapper>
  );
}
