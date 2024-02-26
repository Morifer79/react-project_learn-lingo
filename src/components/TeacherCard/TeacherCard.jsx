import { useState } from 'react';
import SpriteIcons from '../../images/sprite.svg';
import {
  Avatar,
  CardSidebar,
  CardContainer,
  GreenDot,
  CardHeader,
  CardMain,
  HiddenData,
  OpenData,
  CardBody,
  BtnHeart,
  GreenMark,
  IconStar,
  IconBook,
  BorderLine,
  Superscript,
  TitleSpan,
  UnderlineSpan,
  BtnMore,
  LevelList,
  MainList,
  RevAvatar,
  FlexContainer,
  FlexWrapper,
  ReviewerComment,
  BtnLesson,
  AligneWrapper,
} from './TeacherCard.styled';
import dot from 'images/green-dot.png';
import { AuthModal } from 'components/AuthModal/AuthModal';
import { TeacherModal } from 'components/TeacherModal/TeacherModal';

export const TeacherCard = ({card}) => {
  const [isTeacherModalOpen, setTeacherModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const lang = card.languages.join(', ');

  const openTeacherModal = () => {
    setTeacherModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeTeacherModal = () => {
    setTeacherModalOpen(false);
    document.body.style.overflow = '';
  };

  const handleClick = () => {
    setIsClicked(true);
    setIsHidden(true);
  };

  const toggleFavorite = () => {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true);
  };

  return (
    <CardContainer>
      <CardSidebar>
        <GreenDot src={dot} alt="dot" width={12} height={12} />
        <Avatar src={card.avatar_url} alt="avatar" />
      </CardSidebar>

      <CardBody>
        <CardHeader>
          <Superscript>Languages</Superscript>
          <AligneWrapper>
            <IconBook width={16} height={16}>
              <use xlinkHref={`${SpriteIcons}#icon-book-open`} />
            </IconBook>
            <p>Lessons online</p> <BorderLine>|</BorderLine>{' '}
            <p>Lessons done: {card.lessons_done}</p> <BorderLine>|</BorderLine>
            <IconStar width={16} height={16} fill="#FFC531">
              <use xlinkHref={`${SpriteIcons}#icon-star-full`} />
            </IconStar>
            <p>Rating: {card.rating} </p>
            <BorderLine>|</BorderLine>{' '}
            <p>
              Price / 1 hour: <GreenMark>{card.price_per_hour}$</GreenMark>
            </p>
            <BtnHeart onClick={toggleFavorite}>
              {isFavorite ? (
                <svg width={26} height={26} stroke="#F4C550" fill="#F4C550">
                  <use xlinkHref={`${SpriteIcons}#icon-heart`} />
                </svg>
              ) : (
                <svg width={26} height={26} stroke="#121417" fill="transparent">
                  <use xlinkHref={`${SpriteIcons}#icon-heart`} />
                </svg>
              )}
            </BtnHeart>
          </AligneWrapper>
        </CardHeader>

        <CardMain>
          <h2>
            {card.name} {card.surname}
          </h2>
          <MainList>
            <li>
              <TitleSpan>Speaks: </TitleSpan>{' '}
              <UnderlineSpan>{lang}</UnderlineSpan>
            </li>
            <li>
              <TitleSpan>Lesson Info: </TitleSpan>
              {card.lesson_info}
            </li>
            <li>
              <TitleSpan>Conditions: </TitleSpan>
              {card.conditions}
            </li>
          </MainList>

          {!isHidden && (
            <OpenData>
              <BtnMore onClick={handleClick}>Read more</BtnMore>
              <LevelList>
                <li>{card.levels[0]}</li>
                <li>{card.levels[1]}</li>
                <li>{card.levels[2]}</li>
                <li>{card.levels[3]}</li>
                <li>{card.levels[4]}</li>
                <li>{card.levels[5]}</li>
              </LevelList>
            </OpenData>
          )}

          {isClicked && (
            <HiddenData>
              <p>{card.experience}</p>
              <FlexContainer>
                <RevAvatar
                  src={card.reviews[0].reviewer_avatar}
                  alt="avatar"
                  width={44}
                  height={44}
                />
                <FlexWrapper>
                  <h3>{card.reviews[0].reviewer_name}</h3>
                  <p>
                    <svg width={16} height={16} fill="#FFC531">
                      <use xlinkHref={`${SpriteIcons}#icon-star-full`} />
                    </svg>
                    {card.reviews[0].reviewer_rating}.0
                  </p>
                </FlexWrapper>
              </FlexContainer>
              <ReviewerComment>{card.reviews[0].comment}</ReviewerComment>

              <FlexContainer>
                <RevAvatar
                  src={card.reviews[1].reviewer_avatar}
                  alt="avatar"
                  width={44}
                  height={44}
                />
                <FlexWrapper>
                  <h3>{card.reviews[1].reviewer_name}</h3>
                  <p>
                    <svg width={16} height={16} fill="#FFC531">
                      <use xlinkHref={`${SpriteIcons}#icon-star-full`} />
                    </svg>
                    {card.reviews[1].reviewer_rating}.0
                  </p>
                </FlexWrapper>
              </FlexContainer>
              <ReviewerComment>{card.reviews[1].comment}</ReviewerComment>

              <LevelList>
                <li>{card.levels[0]}</li>
                <li>{card.levels[1]}</li>
                <li>{card.levels[2]}</li>
                <li>{card.levels[3]}</li>
                <li>{card.levels[4]}</li>
                <li>{card.levels[5]}</li>
              </LevelList>
              <BtnLesson onClick={openTeacherModal}>
                Book trial lesson
              </BtnLesson>
              <AuthModal
                isOpen={isTeacherModalOpen}
                onRequestClose={closeTeacherModal}
              >
                <TeacherModal card={card} onRequestClose={closeTeacherModal}/>
              </AuthModal>
            </HiddenData>
          )}
        </CardMain>
      </CardBody>
    </CardContainer>
  );
};
