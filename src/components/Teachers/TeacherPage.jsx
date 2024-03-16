import { FiltersBar } from 'components/FiltersBar/FiltersBar';
import { TeachersList } from './TeachersList';
import { useSelector } from 'react-redux';

import { getFilteredTeachers, selectLoading } from '../../redux/selectors';
import { BtnLoadMore, BtnWrapper, InfoText, Wrapper } from './TeacherCard/TeacherCard.styled';
import { useState } from 'react';
import { Loader } from 'components/Loader';

export const TeacherPage = () => {
  const [renderCard, setRenderCard] = useState(4);
  const filteredTeachers = useSelector(getFilteredTeachers);
  const isLoading = useSelector(selectLoading);

  const handleLoadMore = () => {
    setRenderCard(prevState => prevState + 4);
  };

  return (
    <>
      <Wrapper>
        <FiltersBar />
      </Wrapper>
      {isLoading && <Loader />}
      {!isLoading && filteredTeachers.length === 0 && (
        <InfoText>No teachers found based on the selected filters 😕</InfoText>
      )}
      <TeachersList renderCard={renderCard} />
      {renderCard < filteredTeachers.length && (
        <BtnWrapper>
          <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
        </BtnWrapper>
      )}
    </>
  );
};
