import { theme } from 'components/theme';
import styled from 'styled-components';

export const CardContainer = styled.div`
  margin-block: ${theme.spacing(8)};
  margin-inline: auto;
  padding: ${theme.spacing(12)};

  max-inline-size: 1184px;
  display: flex;
  gap: ${theme.spacing(24)};
  background-color: ${theme.colors.light};
  border-radius: ${theme.radii.l};

  @media screen and (max-width: 1439px) {
    flex-direction: column;
  }
`;

export const CardSidebar = styled.div`
  flex-shrink: 0;
`;

export const AlignWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  padding: ${theme.spacing(6)};
  inline-size: 126px;
  block-size: 126px;
  border-radius: ${theme.radii.xxl};
  border: 3px solid #fbe9ba;
`;

export const GreenDot = styled.img`
  transform: translate(88px, 34px);
  border-radius: ${theme.radii.xxl};
`;

export const CardHeader = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: ${theme.spacing(5)};
  }
  @media screen and (min-width: 1440px) {
    gap: ${theme.spacing(80)};
  }

  p {
    display: inline-flex;
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const Superscript = styled.span`
  font-weight: 500;
  line-height: 1.5;
  color: ${theme.colors.accent};
`;

export const BorderLine = styled.span`
  margin-inline: ${theme.spacing(8)};
  color: rgba(18, 20, 23, 0.2);
`;

export const IconBook = styled.svg`
  transform: translateY(3px);
  margin-inline-end: ${theme.spacing(4)};
`;

export const IconStar = styled.svg`
  transform: translateY(3px);
  margin-inline-end: ${theme.spacing(4)};
`;

export const GreenMark = styled.span`
  margin-inline-start: ${theme.spacing(2)};
  color: ${theme.colors.grass};
`;

export const BtnHeart = styled.button`
  margin-inline-start: ${theme.spacing(32)};
  background-color: transparent;
  border: none;

  &:hover svg {
    @keyframes shadow {
      0% {
        scale: 1;
      }
      50% {
        scale: 1.2;
      }
      100% {
        scale: 1;
      }
    }
    animation: shadow 0.5s ease infinite;
  }
`;

export const CardMain = styled.div`
  h2 {
    margin-block-end: ${theme.spacing(16)};

    font-size: 24px;
    font-weight: 500;
    line-height: 1;
  }
`;

export const MainList = styled.ul`
  margin-block-end: ${theme.spacing(8)};

  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};
  font-weight: 500;
  line-height: 1.5;
`;

export const TitleSpan = styled.span`
  color: ${theme.colors.accent};
`;

export const UnderlineSpan = styled.span`
  text-decoration: underline;
`;

export const BtnReadMore = styled.button`
  margin-block-end: ${theme.spacing(16)};
  border: none;
  background-color: transparent;
  font-weight: 500;
  text-decoration: underline;

  &.active {
    display: none;
  }
`;

export const LevelList = styled.ul`
  display: flex;
  gap: ${theme.spacing(4)};
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const LevelItem = styled.li`
  padding: ${theme.spacing(4)} ${theme.spacing(6)};

  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.light};
  border: ${({ $active }) =>
    $active ? 'none' : '1px solid rgba(18, 20, 23, 0.2)'};
  border-radius: ${theme.radii.xl};
  color: ${theme.colors.main};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.142;
`;

export const FlexContainer = styled.div`
  margin-block: ${theme.spacing(17.5)} ${theme.spacing(8)};

  display: flex;
  gap: ${theme.spacing(6)};
`;

export const RevAvatar = styled.img`
  border-radius: ${theme.radii.xxl};
`;

export const FlexWrapper = styled.div`
  gap: ${theme.spacing(1.5)};

  h3 {
    color: ${theme.colors.accent};
    font-weight: 500;
    line-height: 1.5;
  }

  p {
    font-weight: 500;
  }

  svg {
    margin-inline-end: ${theme.spacing(6)};
    transform: translateY(2px);
  }
`;

export const ReviewerComment = styled.p`
  margin-block-end: ${theme.spacing(16)};

  font-weight: 500;
  line-height: 1.5;
`;

export const BtnLesson = styled.button`
  margin-block-start: ${theme.spacing(16)};
  padding: ${theme.spacing(8)} ${theme.spacing(24)};

  border-radius: ${theme.radii.xs};
  border: none;
  background: ${theme.colors.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.555;

  transition: background-color ${theme.transition};

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const BtnLoadMore = styled.button`
  margin-block: ${theme.spacing(24)} ${theme.spacing(48)};
  padding: ${theme.spacing(8)} ${theme.spacing(24)};

  border-radius: ${theme.radii.xs};
  border: none;
  background: ${theme.colors.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.555;

  transition: background-color ${theme.transition};

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const BtnWrapper = styled.div`
  text-align: center;
`;

export const Wrapper = styled.div`
  padding-inline-start: ${theme.spacing(12)};
  @media screen and (min-width: 1440px) {
    padding-inline-start: ${theme.spacing(61)};
  }
`;

export const InfoText = styled.div`
  margin-block-start: 10%;
  text-align: center;
  font-size: 40px;
`;
