import { TeacherCard } from 'components/TeacherCard/TeacherCard';
import { get, getDatabase, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export const TeachersList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const dataRef = ref(db);
      const snapshot = await get(dataRef);
      const fetchedData = snapshot.val();
      if (fetchedData) {
        const dataArray = Object.keys(fetchedData).map(key => ({
          id: key,
          ...fetchedData[key]
        }));
        setData(dataArray);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>Teachers List</div>
      <ul>
        {data.map(card => (
          <li key={card.id}>
            <TeacherCard card={card} />
          </li>
        ))}
      </ul>
    </>
  );
};
