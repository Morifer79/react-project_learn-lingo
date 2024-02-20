import jane from '../../images/jane.png';
import frank from '../../images/frank.png';
import eve from '../../images/eve.png';

export const TeacherCard = (
//   {
//   card: { id },
//   onOpen,
// }
) => {
  return (
    <div>
      <div>
        <img src={jane} alt="avatar" width={96} height={96} />
        <span>Languages</span>
        <ul>
          <li>
            <svg width={16} height={16}>
              <use href="../../images/sprite.svg#icon-book-open" />
            </svg>
            Lessons online
          </li>
          <li>Lessons done: 1098</li>
          <li>
            <svg width={16} height={16}>
              <use href="../../images/sprite.svg#icon-icon_star" />
            </svg>
            Rating: 4.8
          </li>
          <li>
            Price / 1 hour: <span>30$</span>
          </li>
        </ul>
        <svg width={26} height={26}>
          <use href="../../images/sprite.svg#icon-heart" />
        </svg>
      </div>
      <h2>Jane Smith</h2>
      <p>
        <span>Speaks:</span> <span>German, French</span>
      </p>
      <p>
        <span>Lesson Info:</span> Lessons are structured to cover grammar,
        vocabulary, and practical usage of the language.
      </p>
      <p>
        <span>Conditions:</span> Welcomes both adult learners and teenagers (13
        years and above).Provides personalized study plans
      </p>
      <button>Read more</button>
      <div>
        <p>
          Jane is an experienced and dedicated language teacher specializing in
          German and French. She holds a Bachelor's degree in German Studies and
          a Master's degree in French Literature. Her passion for languages and
          teaching has driven her to become a highly proficient and
          knowledgeable instructor. With over 10 years of teaching experience,
          Jane has helped numerous students of various backgrounds and
          proficiency levels achieve their language learning goals. She is
          skilled at adapting her teaching methods to suit the needs and
          learning styles of her students, ensuring that they feel supported and
          motivated throughout their language journey.
        </p>
        <ul>
          <li>
            <img src={frank} alt="avatar" width={44} height={44} />
            <h3>Frank</h3>
            <p>
              <svg width={16} height={16}>
                <use href="../../images/sprite.svg#icon-icon_star" />
              </svg>
              4.0
            </p>
            <p>Jane's lessons were very helpful. I made good progress.</p>
          </li>
          <li>
            <img src={eve} alt="avatar" width={44} height={44} />
            <h3>Frank</h3>
            <p>
              <svg width={16} height={16}>
                <use href="../../images/sprite.svg#icon-icon_star" />
              </svg>
              5.0
            </p>
            <p>Jane is an amazing teacher! She is patient and supportive.</p>
          </li>
        </ul>
      </div>
      <ul>
        <li>#A1 Beginner</li>
        <li>#A2 Elementary</li>
        <li>#B1 Intermediate</li>
        <li>#B2 Upper-Intermediate</li>
      </ul>
      <button>Book trial lesson</button>
    </div>
  );
};
