import SpriteIcons from '../../../images/sprite.svg';
import {
  FlexContainer,
  FlexWrapper,
  RevAvatar,
  ReviewerComment,
} from './TeacherCard.styled';

export const TeacherReviewer = ({ item }) => {
  const { reviewer_avatar, reviewer_name, reviewer_rating, comment } = item;
  return (
    <>
      <FlexContainer>
        <RevAvatar src={reviewer_avatar} alt="avatar" width={44} height={44} />
        <FlexWrapper>
          <h3>{reviewer_name}</h3>
          <p>
            <svg width={16} height={16} fill="#FFC531">
              <use xlinkHref={`${SpriteIcons}#icon-star-full`} />
            </svg>
            {reviewer_rating}.0
          </p>
        </FlexWrapper>
      </FlexContainer>
      <ReviewerComment>{comment}</ReviewerComment>
    </>
  );
};
