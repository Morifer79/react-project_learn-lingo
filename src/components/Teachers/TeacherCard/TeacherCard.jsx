import SpriteIcons from '../../../images/sprite.svg';
import dot from '../../../images/green-dot.png';
import toast from 'react-hot-toast';
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
  AlignWrapper,
  LevelItem,
} from './TeacherCard.styled';
import { TeacherModal } from 'components/Teachers/TeacherModal/TeacherModal';
import { TeacherReviewer } from './TeacherReviewer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, selectFilter } from '../../../redux/selectors';
import { addFavorites, removeFavorites } from '../../../redux/favoritesSlice';
import { auth } from '../../../firebase';
import { AuthModal } from 'components/Auth/AuthModal/AuthModal';
import { onAuthStateChanged } from 'firebase/auth';

export const TeacherCard = ({ card }) => {
  const [isTeacherModalOpen, setTeacherModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites?.some(
    favorite => favorite.lessons_done === card.lessons_done
  );
  const filteredLevel = useSelector(selectFilter).level;

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (!authUser) {
      toast.error('You don`t authorized!', {
        duration: 5000,
        position: 'top-right',
      });
      return;
    }

    isFavorite && authUser
      ? dispatch(removeFavorites(card.id))
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

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      user ? setAuthUser(user) : setAuthUser(null);
    });
    return () => listen();
  }, []);

  return (
    <CardContainer>
      <CardSidebar>
        <GreenDot src={dot} alt="dot" width={12} height={12} />
        <Avatar src={avatar_url} alt="avatar" />
      </CardSidebar>

      <CardBody>
        <CardHeader>
          <Superscript>Languages</Superscript>
          <AlignWrapper>
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
              {isFavorite && authUser ? (
                <svg width={26} height={26} stroke="#F4C550" fill="#F4C550">
                  <use xlinkHref={`${SpriteIcons}#icon-heart`} />
                </svg>
              ) : (
                <svg width={26} height={26} stroke="#121417" fill="transparent">
                  <use xlinkHref={`${SpriteIcons}#icon-heart`} />
                </svg>
              )}
            </BtnHeart>
          </AlignWrapper>
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
                {levels.map(level => (
                  <LevelItem key={level} $active={level === filteredLevel}>
                    {level}
                  </LevelItem>
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
                {levels.map(level => (
                  <LevelItem key={level}>
                    {level}
                  </LevelItem>
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
