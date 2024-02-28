import { useState } from 'react';
import SpriteIcons from 'images/sprite.svg';
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
  BtnReadMore,
  LevelList,
  MainList,
  BtnLesson,
  AligneWrapper,
} from './TeacherCard.styled';
import dot from 'images/green-dot.png';
import { AuthModal } from 'components/AuthModal/AuthModal';
import { TeacherModal } from 'components/Teachers/TeacherModal/TeacherModal';
import { TeacherReviewer } from './TeacherReviewer';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../../redux/selectors';
import { addFavorites, removeFavorites } from '../../../redux/teachersSlice';
import { auth } from '../../../firebase';

export const TeacherCard = ({ card }) => {
  const [isTeacherModalOpen, setTeacherModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites?.some(favorite => favorite.lessons_done === card.lessons_done);
  
  
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    isFavorite && auth
      ? dispatch(removeFavorites(card))
      : dispatch(addFavorites(card));
  };

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

  const {
    avatar_url,
    lessons_done,
    rating,
    price_per_hour,
    name,
    surname,
    lesson_info,
    conditions,
    languages,
    levels,
    experience,
    reviews,
  } = card;

  const lang = languages.join(', ');

  return (
    <CardContainer>
      <CardSidebar>
        <GreenDot src={dot} alt="dot" width={12} height={12} />
        <Avatar src={avatar_url} alt="avatar" />
      </CardSidebar>

      <CardBody>
        <CardHeader>
          <Superscript>Languages</Superscript>
          <AligneWrapper>
            <IconBook width={16} height={16}>
              <use xlinkHref={`${SpriteIcons}#icon-book-open`} />
            </IconBook>
            <p>Lessons online</p> <BorderLine>|</BorderLine>{' '}
            <p>Lessons done: {lessons_done}</p> <BorderLine>|</BorderLine>
            <IconStar width={16} height={16} fill="#FFC531">
              <use xlinkHref={`${SpriteIcons}#icon-star-full`} />
            </IconStar>
            <p>Rating: {rating} </p>
            <BorderLine>|</BorderLine>{' '}
            <p>
              Price / 1 hour: <GreenMark>{price_per_hour}$</GreenMark>
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
            {name} {surname}
          </h2>
          <MainList>
            <li>
              <TitleSpan>Speaks: </TitleSpan>{' '}
              <UnderlineSpan>{lang}</UnderlineSpan>
            </li>
            <li>
              <TitleSpan>Lesson Info: </TitleSpan>
              {lesson_info}
            </li>
            <li>
              <TitleSpan>Conditions: </TitleSpan>
              {conditions}
            </li>
          </MainList>

          {!isHidden && (
            <OpenData>
              <BtnReadMore onClick={handleClick}>Read more</BtnReadMore>
              <LevelList>
                {levels.map((level, idx) => (
                  <li key={idx}>{level}</li>
                ))}
              </LevelList>
            </OpenData>
          )}

          {isClicked && (
            <HiddenData>
              <p>{experience}</p>
              {reviews.map((item, idx) => (
                <TeacherReviewer key={idx} item={item} />
              ))}
              <LevelList>
                {levels.map((level, idx) => (
                  <li key={idx}>{level}</li>
                ))}
              </LevelList>
              <BtnLesson onClick={openTeacherModal}>
                Book trial lesson
              </BtnLesson>
              <AuthModal
                isOpen={isTeacherModalOpen}
                onRequestClose={closeTeacherModal}
              >
                <TeacherModal card={card} onRequestClose={closeTeacherModal} />
              </AuthModal>
            </HiddenData>
          )}
        </CardMain>
      </CardBody>
    </CardContainer>
  );
};
