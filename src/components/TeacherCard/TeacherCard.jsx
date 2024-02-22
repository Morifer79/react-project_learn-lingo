// import { useState } from 'react';
// import { PopUp } from 'components/PopUp/PopUp';
// import SpriteIcons from '../../images/sprite.svg';



// export const TeacherCard = ({card}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isClick, setIsClick] = useState(null);

//   const openModal = card => {
//     setIsClick(card);
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setIsClick(null);
//     setIsModalOpen(false);
//     document.body.style.overflow = '';
//   };

//   const {
//     name,
//     surname,
//     languages,
//     levels,
//     rating,
//     reviews,
//     price_per_hour,
//     lessons_done,
//     avatar_url,
//     lesson_info,
//     conditions,
//     experience,
//   } = card;

//   return (
//     <div>
//       <ul>
//         <div>
//           <img src={avatar_url} alt="avatar" width={96} height={96} />
//           <span>Languages</span>
//           <ul>
//             <li>
//               <svg width={16} height={16}>
//                 <use xlinkHref={`${SpriteIcons}#icon-book-open`} />
//               </svg>
//               Lessons online
//             </li>
//             <li>Lessons done: {lessons_done}</li>
//             <li>
//               <svg width={16} height={16}>
//                 <use xlinkHref={`${SpriteIcons}#icon-icon_star`} />
//               </svg>
//               Rating: {rating}
//             </li>
//             <li>
//               Price / 1 hour: <span>{price_per_hour}</span>
//             </li>
//           </ul>
//           <svg width={26} height={26}>
//             <use xlinkHref={`${SpriteIcons}#icon-heart`} />
//           </svg>
//         </div>
//         <h2>
//           {name}
//           {surname}
//         </h2>
//         <p>
//           <span>Speaks:</span> <span>{languages}</span>
//         </p>
//         <p>
//           <span>Lesson Info:</span>
//           {lesson_info}
//         </p>
//         <p>
//           <span>Conditions:</span>
//           {conditions}
//         </p>
//         <button>Read more</button>
//         <div>
//           <p>{experience}</p>
//           <ul>
//             <li>
//               <img src={reviews.reviewer_avatar} alt="avatar" width={44} height={44} />
//               <h3>{reviews.reviewer_name}</h3>
//               <p>
//                 <svg width={16} height={16}>
//                   <use xlinkHref={`${SpriteIcons}#icon-icon_star`} />
//                 </svg>
//                 {reviews.reviewer_rating}.0
//               </p>
//               <p>{reviews.comment}</p>
//             </li>
//           </ul>
//         </div>
//         <ul>
//           <li>{levels}</li>
//         </ul>
//         <button onClick={() => openModal(card)}>Book trial lesson</button>
//       </ul>
//       {isModalOpen && (
//         <PopUp
//           isOpen={isModalOpen}
//           onRequestClose={closeModal}
//           card={isClick}
//         />
//       )}
//     </div>
//   );
// };
